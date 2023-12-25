import { Point } from '../types/Point.ts';

export const drawPoint = (
  ctx: CanvasRenderingContext2D,
  circle: Point,
  radius: number,
  color: string
) => {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.arc(circle.x, circle.y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
};
