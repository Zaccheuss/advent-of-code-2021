import { inputFile } from "../util/file-reader.js";

export function run() {
  const rawInput = inputFile("day-5/test-input.txt");
  const formattedInput = rawInput.map(x => x.split(" -> ").map(y => y.split(",").map(Number)));

  const matrix = [...Array(10)].map(x => Array(10).fill(0));

  const lineArray = [];

  formattedInput.forEach(x => {
    const line = createLine(x[0], x[1]);
    if (line) {
      lineArray.push(line);
    }
  })
  console.log(lineArray)

  console.time("lines");
  lineArray.forEach((line) => {
    console.count("line");
    line.forEach((point) => {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = matrix[i].length; j > 0 ; j--) {
          if (point[0] === i && point[1] === j) {
            matrix[i][j]++;
          }
        }
      }
    });
  });

  // console.timeEnd("lines");
  // const flatLines = lineArray.flat();
  // const flatLinesUnique = Array.from(new Set(flatLines.map(JSON.stringify)), JSON.parse)

  // console.log(flatLines)
  // console.log(flatLinesUnique)

  // console.log(flatLines.length, flatLinesUnique.length);
  // console.log(Number(flatLines.length) - Number(flatLinesUnique.length))

  let score = 0;
  console.time("score");
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 1) { score++ }
    }
  }
  console.timeEnd("score");
  console.log("score:",score);

}

function createLine(startPoint, endPoint) {
  const line = [startPoint, endPoint];
  const pointDifference = line[0].map((v, i) => v - line[1][i]);
  const outputArray = [];

  if (pointDifference[0] === 0) {
    // vertical line
    const startY = Math.min(line[0][1], line[1][1]);
    const endY = Math.max(line[0][1], line[1][1]);

    for (let y = startY; y <= endY; y++) {
      outputArray.push([line[1][0], y]);
    }
  } else if (pointDifference[1] === 0) {
    // horizontal line
    const startX = Math.min(line[0][0], line[1][0]);
    const endX = Math.max(line[0][0], line[1][0]);

    for (let x = startX; x <= endX; x++) {
      outputArray.push([x, line[0][1]]);
    }
  } else {
    return null;
  }

  return outputArray;
}

