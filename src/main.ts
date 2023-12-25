import './style.css';

import {render} from './render.ts';

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const canvas = document.querySelector<HTMLCanvasElement>('#app');

if (canvas) {
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const context = canvas.getContext('2d');

  if (context) {
    render(context, WIDTH, HEIGHT);
  }
}
