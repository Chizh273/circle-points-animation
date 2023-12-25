import { Point } from '../types/Point.ts';

export const getCirclePoint = (
  center: Point,
  radius: number,
  angleTranslation: number,
): Point => ({
  x: radius * Math.cos(angleTranslation) + center.x,
  y: radius * Math.sin(angleTranslation) + center.y,
});
