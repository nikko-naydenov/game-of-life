export const buildMatrix = (rows: number, columns: number) => {
  const matrix: number[][] = [];
  let liveCellsCount = 0;
  for (let i = 0; i < rows; i++) {
    matrix.push([]);

    for (let j = 0; j < columns; j++) {
      const cellState = Math.random() > 0.7 ? 1 : 0;
      matrix[i].push(cellState);
      liveCellsCount += cellState;
    }
  }
  return { matrix, liveCellsCount };
};

export const buildEmptyMatrix = (rows: number, columns: number) => {
  const matrix: number[][] = [];
  for (let i = 0; i < rows; i++) {
    matrix.push([]);
    for (let j = 0; j < columns; j++) {
      matrix[i].push(0);
    }
  }
  return matrix;
};

const neighborPositions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];

export const calculateNeighbors = (
  matrix: number[][],
  positionX: number,
  positionY: number
) => {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  let neighbors = 0;

  neighborPositions.forEach(([x, y]) => {
    const newX = positionX + x;
    const newY = positionY + y;
    if (newX >= 0 && newX < numRows && newY >= 0 && newY < numCols) {
      neighbors += matrix[newX][newY];
    }
  });

  return neighbors;
};

export const calculateNewGeneration = (
  generation: number[][],
  rows: number,
  cols: number
) => {
  const newGeneration: number[][] = [];
  for (let i = 0; i < rows; i++) {
    newGeneration.push([]);

    for (let j = 0; j < cols; j++) {
      const neighbors = calculateNeighbors(generation, i, j);
      if (neighbors <= 1 || neighbors >= 4) {
        newGeneration[i][j] = 0;
      } else if (generation[i][j] === 1 && (neighbors > 1 || neighbors < 4)) {
        newGeneration[i][j] = 1;
      } else if (generation[i][j] === 0 && neighbors === 3) {
        newGeneration[i][j] = 1;
      } else {
        newGeneration[i][j] = generation[i][j];
      }
    }
  }
  return newGeneration;
};
