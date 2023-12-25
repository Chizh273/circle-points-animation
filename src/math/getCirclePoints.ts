import { Point } from '../types/Point.ts';
import { getCirclePoint } from './getCirclePoint.ts';

export const getCirclePoints = (
  center: Point,
  pointsNumber: number,
  radius: number,
  slidePoints = false,
) => {
  const angle = (2 * Math.PI) / pointsNumber;

  return Array.from({ length: pointsNumber }).map((_, i) =>
    getCirclePoint(
      center,
      radius,
      slidePoints ? angle * i + angle / 2 : angle * i,
    ),
  );
};
