import { Point } from '../types/Point.ts';

export const drawLinesBetweenPoints = (
  ctx: CanvasRenderingContext2D,
  point: Point,
  prevPoint: Point,
  nextPoint: Point,
  prevRowPoint?: Point,
  nextRowPoint?: Point,
  drawBetweenCirclesLines = false,
) => {
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#aaa';
  ctx.moveTo(nextPoint.x, nextPoint.y);
  ctx.lineTo(prevPoint.x, prevPoint.y);

  if (drawBetweenCirclesLines) {
    if (prevRowPoint) {
      ctx.moveTo(point.x, point.y);
      ctx.lineTo(prevRowPoint.x, prevRowPoint.y);
      ctx.lineTo(nextPoint.x, nextPoint.y);
    }

    if (nextRowPoint) {
      ctx.moveTo(point.x, point.y);
      ctx.lineTo(nextRowPoint.x, nextRowPoint.y);
      ctx.lineTo(nextPoint.x, nextPoint.y);
    }
  }

  ctx.stroke();
  ctx.closePath();
};
