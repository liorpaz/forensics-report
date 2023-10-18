import {makeAutoObservable} from 'mobx';
import {DamagePoint, Point} from '../types';
import {autoSave} from './autoSave';

export class Store {
  damagePoints:DamagePoint[] = [];
  info = {
    reporterName: '',
    reporterID: '',
    formDate: '',
    dateOfInjury: '',
    timeOfInjury: '',
    timeOfDeclaration: ''
  };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    autoSave(this, 'damagePoints');
    autoSave(this, 'info');

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
    // @ts-ignore
    Object.keys(this.info).forEach(key => this.info[key] = undefined);
  }

  setInfo = (key: string, value: any) => {
    // @ts-ignore
    this.info[key] = value;
  }

  get numDamagePoints() {
    return this.damagePoints.length;
  }

}