import { getCirclePoints } from './math/getCirclePoints.ts';
import { setupDatGui } from './dat-gui.ts';
import { draw } from './draw/draw.ts';

export const render = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
) => {
  const settings = setupDatGui({
    speed: 0.006,
    circlesNumber: 5,
    pointsOnCircleNumber: 12,
    minCircleRadius: 100,
  });

  const center = {
    x: width / 2,
    y: height / 2,
  };

  let time = 0;
  const animate = () => {
    ctx.clearRect(0, 0, width, height);

    const points = Array.from({ length: settings.circlesNumber }).map(
      (_, i) => {
        const radius =
          i % 2
            ? settings.minCircleRadius * (i + 1) * Math.cos(time)
            : settings.minCircleRadius * (i + 1) * Math.sin(time);

        return getCirclePoints(
          center,
          settings.pointsOnCircleNumber,
          radius,
          !!(i % 2),
        );
      },
    );

    draw(ctx, points);

    time += settings.speed;
    requestAnimationFrame(animate);
  };
  animate();
};
