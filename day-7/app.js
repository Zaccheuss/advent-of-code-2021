import { inputFile } from "../util/file-reader.js";

export function run() {
  const rawInput = inputFile("day-7/input.txt");
  const sortedPositions = rawInput[0].split(",").map(Number).sort((a,b) => a - b);

  // binarySearch(sortedPositions);
  console.log("Part 1:", bruteForceSearch(sortedPositions, 1));
  console.log("Part 2:", bruteForceSearch(sortedPositions, 2));
}

function bruteForceSearch(values, partNumber) {
  let smallestDistance = Number.MAX_SAFE_INTEGER;
  const startPos = values[0];
  const endPos = values[values.length - 1];

  for (let i = startPos; i < endPos; i++) {
    const distance = partNumber === 1 ? calculateFuelConsumption(i, values) : calculateVariableFuelConsumption(i, values);
    if (distance < smallestDistance) {
      smallestDistance = distance;
    }
  }

  return smallestDistance;
}

// function binarySearch(values) {
//   let lower = 0;
//   let upper = values.length - 1;
//   let middle = lower + Math.floor((upper - lower) / 2);
//   const initialTotalDistance = calculateFuelConsumption(middle, values);

//   while (lower <= upper) {
//     const lowerMiddle = lower + Math.floor((middle - 1 - lower) / 2);
//     const upperMiddle = middle + Math.floor((upper - middle + 1) / 2);

//     const lowerMiddleDistance = calculateFuelConsumption(lowerMiddle, values);
//     const upperMiddleDistance = calculateFuelConsumption(upperMiddle, values);

//     if (upperMiddleDistance < initialTotalDistance) {
//       lower = middle + 1;
//     } else {
//       upper = middle - 1;
//     }

//     middle = lower + Math.floor((upper - lower) / 2);
//     console.log(lowerMiddleDistance);
//   }

// }

export function calculateFuelConsumption(position, values) {
  let totalDistance = 0;

  values.forEach(value => {
    totalDistance += Math.abs(value - position);
  })

  return totalDistance;
}

export function calculateVariableFuelConsumption(position, values) {
  let totalDistance = 0;

  values.forEach(value => {
    totalDistance += calculateNthTriangleNumber(Math.abs(value - position));
  })

  return totalDistance;
}

export function calculateNthTriangleNumber(value) {
  return (Math.pow(value, 2) + value) / 2;
}