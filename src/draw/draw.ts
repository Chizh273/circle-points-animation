import { drawLinesBetweenPoints } from './drawLinesBetweenPoints.ts';
import * as PointUtil from '../utils/getPoint.ts';
import { drawPoint } from './drawPoint.ts';
import { Point } from '../types/Point.ts';

export const draw = (ctx: CanvasRenderingContext2D, points: Point[][]) => {
  points.forEach((row, rowIdx) => {
    row.forEach((point, pointIdx) => {
      const prevPoint = PointUtil.getPrevPoint(row, pointIdx);
      const nextPoint = PointUtil.getNextPoint(row, pointIdx);

      const prevRowPoint = PointUtil.getPrevRowPoint(points, rowIdx, pointIdx);
      const nextRowPoint = PointUtil.getNextRowPoint(points, rowIdx, pointIdx);

      drawLinesBetweenPoints(
        ctx,
        point,
        prevPoint,
        nextPoint,
        prevRowPoint,
        nextRowPoint,
        // Do not render lines for inner circles.
        !(rowIdx % 2),
      );

      // Draw a point on a circle.
      drawPoint(ctx, point, 3 * (rowIdx + 1));
    });
  });
};
