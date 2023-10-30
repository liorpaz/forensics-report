export type Point = {
  x: number;
  y: number;
}

export type DamagePoint = {
  areaPoints: Point[];
  description?: string;
  limb?: string;
  side?: string;
  anatomicRelation?: string;
  damageType?: string;
}
