import { inputFile } from "../util/file-reader.js";

export function run() {
  const rawInput = inputFile("day-6/input.txt");
  const fishAgeArray = rawInput[0].split(",").map(Number);

  let fishMap = new Map();
  for(let i = 0; i < 9; i++) {
    fishMap.set(i, 0);
  }

  fishAgeArray.forEach(age => {
    fishMap.set(age, fishMap.get(age) + 1)
  })

  let tempFishMap;
  for (let day = 0; day < 256; day++) {
    tempFishMap = new Map();
    for(let i = 7; i >= 0; i--) {
      tempFishMap.set(i, fishMap.get(i + 1));
    }
    tempFishMap.set(6, tempFishMap.get(6) + fishMap.get(0));
    tempFishMap.set(8, fishMap.get(0));

    fishMap = tempFishMap;
  }

  let sum = 0;
  fishMap.forEach(value => {
    sum += value;
  })

  console.log(sum)
}
