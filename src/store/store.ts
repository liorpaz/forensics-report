import {makeAutoObservable, observe, reaction} from 'mobx';
import {DamagePoint, Point} from '../types';
import {autoSave} from './autoSave';

export class Store {
  damagePoints:DamagePoint[] = [];

  constructor() {
    makeAutoObservable(this);
    autoSave(this, 'damagePoints');
  }

  addDamagePoint = (item:DamagePoint):number => {
    this.damagePoints.push(item);
    return this.damagePoints.length - 1;
  }

  addDamagePointGraphicsPoint = (index: number, graphicsPoint: Point) => {
    this.damagePoints[index].areaPoints.push(graphicsPoint);
  }

  addDamagePointDescription = (index: number, description: string) => {
    this.damagePoints[index].description = description;
  }

  deleteDamagePoint = (index: number) => {
    this.damagePoints.splice(index, 1);
  }

  clear = () => {
    this.damagePoints.length = 0;
  }

  get numDamagePoints() {
    return this.damagePoints.length;
  }


}