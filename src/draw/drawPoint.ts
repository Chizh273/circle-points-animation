import { Point } from '../types/Point.ts';

export const drawPoint = (
  ctx: CanvasRenderingContext2D,
  circle: Point,
  radius: number,
) => {
  ctx.beginPath();
  ctx.fillStyle = '#fff';
  ctx.strokeStyle = '#fff';
  ctx.arc(circle.x, circle.y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};
