import { inputFile } from "../util/file-reader.js";
let data = inputFile();

part1();
part2();

function part1() {
  let increaseCount = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] < data[i + 1]) {
      increaseCount++;
    }
  }

  console.log("part 1:", increaseCount);
}

function part2() {
  let increaseCount = 0;

  for (let i = 0; i < data.length - 3; i++) {
    const currentThreeSum = data[i] + data[i + 1] + data[i + 2];
    const nextThreeSum  = data[i + 1] + data[i + 2] + data[i + 3];

    if (currentThreeSum < nextThreeSum) {
      increaseCount++;
    }
  }

  console.log("part 2:", increaseCount);
}
