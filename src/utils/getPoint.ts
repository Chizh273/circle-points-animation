export const getPrevPoint = <T>(points: T[], index: number): T => {
  let prevIndex = index - 1;

  if (prevIndex < 0) {
    prevIndex = points.length - 1;
  }

  return points[prevIndex];
};

export const getNextPoint = <T>(points: T[], index: number): T => {
  let nextIndex = index + 1;

  if (nextIndex >= points.length) {
    nextIndex = 0;
  }

  return points[nextIndex];
};

export const getPrevRowPoint = <T>(
  matrix: T[][],
  rowIndex: number,
  pointIndex: number,
): T | undefined => {
  const prevRowIndex = rowIndex - 1;

  if (prevRowIndex < 0) {
    return;
  }

  return matrix[prevRowIndex][pointIndex];
};

export const getNextRowPoint = <T>(
  matrix: T[][],
  rowIndex: number,
  pointIndex: number,
): T | undefined => {
  const nextRowIndex = rowIndex + 1;

  if (nextRowIndex >= matrix.length) {
    return;
  }

  return matrix[nextRowIndex][pointIndex];
};
