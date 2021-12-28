import { inputFile } from "../util/file-reader.js";

export function run() {
  let rawInput = inputFile("day-8/input.txt").map(x => x.replace("\r", ""));

  part1(rawInput);
  part2(rawInput);
}

function part1(rawInput) {
  let uniqueNumberCount = 0;
  rawInput.forEach(line => {
    const uniqueNumberArray = [2, 3, 4, 7];
    uniqueNumberCount += line.split("|")[1].split(" ").filter(digitOutput => uniqueNumberArray.includes(digitOutput.length)).length;
  });

  console.log("part 1:", uniqueNumberCount);
}

function part2(rawInput) {
  let sum = 0;
  rawInput.forEach(line => {
    let decodedInput = [];
    const codedInput = line.split(" | ")[0].split(" ").map(x => x.split(""));
    const codedOutput = line.split(" | ")[1].split(" ").map(x => x.split("")).map(x => x.sort());
    populateUniqueNumbers(codedInput, decodedInput);
    populateFiveLetterNumbers(codedInput, decodedInput);
    populateSixLetterNumbers(codedInput, decodedInput);

    decodedInput = decodedInput.map(input => input.sort());
    sum += Number(findOutputReading(decodedInput, codedOutput).join(""));
  })

  console.log("part 2:", sum);
}

function findOutputReading(decodedInput, codedOutput) {
  const decodedOutput = [];
  for (let i = 0; i < codedOutput.length; i++) {
    for (let j = 0; j < decodedInput.length; j++) {
      // if (codedOutput[i].every(letter => decodedInput[i].includes(letter))) {
      if (codedOutput[i].join("") === decodedInput[j].join("")) {
        decodedOutput[i] = j;
      }
    }
  }
  return decodedOutput;
}

function populateUniqueNumbers(codedInput, decodedDigits) {
  codedInput.forEach(input => {
    if (input.length === 2) { decodedDigits[1] = input }
    if (input.length === 4) { decodedDigits[4] = input }
    if (input.length === 3) { decodedDigits[7] = input }
    if (input.length === 7) { decodedDigits[8] = input }
  })
}

function populateFiveLetterNumbers(codedInput, decodedDigits) {
  codedInput.filter(input => input.length === 5).forEach(input => {
    if (decodedDigits[1].every(letter => input.includes(letter))) {
      decodedDigits[3] = input;
    } else if (containsAllLettersExceptOne(input, decodedDigits[4])) {
      decodedDigits[5] = input;
    } else {
      decodedDigits[2] = input;
    }
  })
}

function populateSixLetterNumbers(codedInput, decodedDigits) {
  codedInput.filter(input => input.length === 6).forEach(input => {
    if (decodedDigits[4].every(letter => input.includes(letter))) {
      decodedDigits[9] = input;
    } else if (decodedDigits[1].every(letter => input.includes(letter))) {
      decodedDigits[0] = input;
    } else {
      decodedDigits[6] = input;
    }
  })
}

// Unused but keeping here so the already written tests pass
export function isOneLetterDifference(lettersA, lettersB) {
  let differentLetters;
  if (lettersA.length > lettersB.length) {
    differentLetters = lettersA.filter(letter => !lettersB.includes(letter));
  } else {
    differentLetters = lettersB.filter(letter => !lettersA.includes(letter));
  }

  return differentLetters.length === 1;
}

// checkLetters is the smaller length array (4 in this case)
export function containsAllLettersExceptOne(baseLetters, checkLetters) {
  const differentLetters = baseLetters.filter(letter => checkLetters.includes(letter))
  return checkLetters.length - differentLetters.length === 1;
}