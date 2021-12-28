import { inputFile } from "../util/file-reader.js";

export function run() {
  let rawInput = inputFile("day-9/input.txt").map(x => x.replace("\r", ""));
  const smokeHeightmap = rawInput.map(x => x.split(""));

  let riskLevelSum = 0
  findLowPoints(smokeHeightmap).forEach(height => riskLevelSum += Number(height) + 1);
  console.log("part 1:", riskLevelSum)
}

function findLowPoints(smokeHeightmap) {
  const lowPoints = [];

  for (let y = 0; y < smokeHeightmap.length; y++) {
      const isTop = y === 0;
      const isBottom = y === smokeHeightmap.length - 1;

    for (let x = 0; x < smokeHeightmap[y].length; x++) {
      const isLeft = x === 0;
      const isRight = x === smokeHeightmap[y].length - 1;

      let upperPoint, lowerPoint, nextPoint, prevPoint = undefined;

      const currentPoint = smokeHeightmap[y][x];
      if (!isTop) { upperPoint = smokeHeightmap[y - 1][x] }
      if (!isBottom) { lowerPoint = smokeHeightmap[y + 1][x] }
      if (!isRight) { nextPoint = smokeHeightmap[y][x + 1]}
      if (!isLeft) { prevPoint = smokeHeightmap[y][x - 1]}

      // next point is undefined when we're on the right side
      if (nextPoint === undefined || nextPoint > currentPoint) {
        const lessThanUpperPoint = upperPoint ? upperPoint > currentPoint : true;
        const lessThanLowerPoint = lowerPoint ? lowerPoint > currentPoint : true;
        const lessThanPrevPoint = prevPoint ? prevPoint > currentPoint : true;

        if (lessThanLowerPoint && lessThanUpperPoint && lessThanPrevPoint) {
          lowPoints.push(smokeHeightmap[y][x]);
        }
      }
    }
  }

  return lowPoints;
}