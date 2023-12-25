import dat from 'dat.gui';

import { Settings } from './types/Settings.ts';

export const setupDatGui = (defaultSettings: Settings) => {
  const gui = new dat.GUI();

  gui.add(defaultSettings, 'speed', 0.001, 0.01, 0.001);
  gui.add(defaultSettings, 'pointsOnCircleNumber', 9, 27, 3);
  gui.add(defaultSettings, 'circlesNumber', 3, 9, 1);
  gui.add(defaultSettings, 'minCircleRadius', 50, 250, 1);
  gui.add(defaultSettings, 'pointRadius', 1, 5, 1);

  gui.addColor(defaultSettings, 'lineColor');
  gui.addColor(defaultSettings, 'pointColor');


  return defaultSettings;
};
