import React, {SyntheticEvent, useEffect, useRef, useState} from 'react';
import './DamagePointsCanvas.css';
import bodyImage from'./body.png';
import {DamagePoint, Point} from '../../types';
import {useStore} from '../../store/StoreContext';
import {observer} from 'mobx-react-lite';

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const lineColor = "#000000";
const lineOpacity = 1;
const lineWidth = 2;

export const DamagePointsCanvas = observer(()=> {

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D|null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [isInitiatingCanvas, setIsInitiatingCanvas] = useState(false);
  const {damagePoints, addDamagePoint, addDamagePointGraphicsPoint, numDamagePoints} = useStore()

  useEffect(()=>{
    const canvas = canvasRef.current;
    if (!canvas || isInitiatingCanvas) {
      return;
    }
    setIsInitiatingCanvas(true);
    loadInitImageOnCanvas(canvas).then(()=>{
      loadExistingDamagePoints(canvas, damagePoints);
    });
  }, [canvasRef.current])

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = lineOpacity;
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    ctx.font = "23px Arial";
    ctxRef.current = ctx
  }, [canvasRef.current]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || isDrawing) {
      return;
    }
    loadInitImageOnCanvas(canvas).then(()=>{
      loadExistingDamagePoints(canvas, damagePoints);
    });
  }, [canvasRef.current, numDamagePoints, isDrawing])

  const startDrawing = (e:SyntheticEvent) => {
    if (!ctxRef?.current) {
      return;
    }
    // @ts-ignore
    const {offsetX: x, offsetY: y} = e.nativeEvent;
    addDamagePoint({areaPoints: [{x, y}]});
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(x, y);
    setIsDrawing(true);
  };

  // Function for ending the drawing
  const endDrawing = () => {
    const ctx = ctxRef.current;
    if (!damagePoints || !ctx) {
      return;
    }
    const centerPoint = getCenterPoint(getCurrentPoints(damagePoints, numDamagePoints-1))
    if (damagePoints[numDamagePoints-1].areaPoints.length < 3) {
      drawDot(ctx, damagePoints[numDamagePoints-1].areaPoints[0]);
    }
    ctx.fillText(String(numDamagePoints), centerPoint.x, centerPoint.y);
    ctx.closePath();
    setIsDrawing(false);
  };

  const draw = (e:SyntheticEvent<MouseEvent>) => {
    if (!isDrawing || !ctxRef?.current) {
      return;
    }

    // @ts-ignore
    const p = {x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY};
    addDamagePointGraphicsPoint(numDamagePoints-1, p);
    ctxRef.current?.lineTo(
      // @ts-ignore
      e.nativeEvent.offsetX,
      // @ts-ignore
      e.nativeEvent.offsetY
    );

    ctxRef.current.stroke();
  };

  return (
    <div className="DamagePointsCanvas">
      {numDamagePoints}
      <canvas id="canvas"
              onMouseDown={startDrawing}
              onMouseUp={endDrawing}
              // @ts-ignore
              onMouseMove={draw}
              ref={canvasRef}
              width={CANVAS_WIDTH}
              height={CANVAS_HEIGHT}/>
    </div>
  );
})

function loadInitImageOnCanvas(canvas:HTMLCanvasElement): Promise<void> {
  return new Promise((resolve, reject) => {
    const ctx = canvas.getContext("2d")
    if (!ctx) {
      return reject();
    }
    const image = new Image();
    image.src = bodyImage;
    image.onload = () => {
      ctx?.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      return resolve();
    }
    image.onerror = () => {
      return reject();
    }
  });
}

function getCurrentPoints(damagePoints:DamagePoint[] | null, index:number):Point[] {
  return (damagePoints && damagePoints[index]?.areaPoints) || [];
}

function getCenterPoint(dots:Point[]) :Point{
  const x = dots.reduce((acc, dot) => acc + dot.x, 0) / dots.length;
  const y = dots.reduce((acc, dot) => acc + dot.y, 0) / dots.length;
  return {x: x - 18, y: y + 18};
}

function loadExistingDamagePoints(canvas:HTMLCanvasElement, damagePoints:DamagePoint[] | null) {
  const ctx = canvas.getContext("2d");
  if (ctx && damagePoints && damagePoints.length > 0) {
    damagePoints.forEach((damagePoint, index) => {
      ctx.beginPath();
      ctx.moveTo(damagePoint.areaPoints[0].x, damagePoint.areaPoints[0].y);
      damagePoint.areaPoints.forEach((point, index) => {
        if (index === 0) {
          return;
        }
        ctx.lineTo(point.x, point.y);
      });
      ctx.stroke();
      const centerPoint = getCenterPoint(getCurrentPoints(damagePoints, index));
      if (damagePoint.areaPoints.length < 3) {
        ctx.fillText(String(index+1), centerPoint.x, centerPoint.y);
        drawDot(ctx, damagePoint.areaPoints[0]);
      } else {
        ctx.fillText(String(index+1), centerPoint.x, centerPoint.y);
      }
    });
  }
}

function drawDot(ctx:CanvasRenderingContext2D, point:Point) {
  ctx.fillText('x', point.x-5, point.y+6);
  ctx.fillStyle = lineColor;
  ctx.fill();
}