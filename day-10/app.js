import { inputFile } from "../util/file-reader.js";

export function run() {
  let rawInput = inputFile("day-10/input.txt").map(x => x.replace("\r", ""));

  let corruptedScore = 0;
  let incompleteScore = [];
  rawInput.forEach(line => {
    let score = getCorruptedLineScore(line);
    if (score > 0) {
      corruptedScore += score;
    } else {
      incompleteScore.push(getIncompleteLineScore(line));
    }
  })
  incompleteScore.sort((a, b) => a - b);
  console.log("part 1:", corruptedScore);
  console.log("part 2:", incompleteScore[Math.floor(incompleteScore.length / 2)]);

}

function getCorruptedLineScore(line) {
  const openingCharacters = ["(", "<", "{", "["];

  const characterArray = [];
  for(let i = 0; i < line.length; i++) {
    if (openingCharacters.includes(line[i])) {
      characterArray.push(line[i]);
    }
    else {
      if (isOppositeCharacter(characterArray[characterArray.length - 1], line[i])) {
        characterArray.pop();
      } else {
        console.log(`Expected ${characterArray[characterArray.length - 1]}, but found ${line[i]} instead`)
        return getCorruptedPoints(line[i])
      }
    }
  }

  return 0;
}

function getIncompleteLineScore(line) {
  const openingCharacters = ["(", "<", "{", "["];

  const characterArray = [];
  for(let i = 0; i < line.length; i++) {
    if (openingCharacters.includes(line[i])) {
      characterArray.push(line[i]);
    }
    else {
      if (isOppositeCharacter(characterArray[characterArray.length - 1], line[i])) {
        characterArray.pop();
      }
    }
  }

  const incompleteLinePointMap = new Map([
    [")", 1],
    ["]", 2],
    ["}", 3],
    [">", 4],
  ])

  const pointArray = characterArray.reverse().map(char => getOppositeCharacter(char));

  let score = 0;
  pointArray.forEach(char => {
    score *= 5;
    score += incompleteLinePointMap.get(char);
  })
  return score;
}

export function isOppositeCharacter(openingChar, closingChar) {
  const result = 
    (openingChar === "(" && closingChar === ")") ||
    (openingChar === "<" && closingChar === ">") ||
    (openingChar === "{" && closingChar === "}") ||
    (openingChar === "[" && closingChar === "]")

  return result;
}

function getCorruptedPoints(character) {
  const pointMap = new Map([
    [")", 3],
    ["(", 3],
    ["[", 57],
    ["]", 57],
    ["{", 1197],
    ["}", 1197],
    ["<", 25137],
    [">", 25137],
  ])

  return pointMap.get(character);
}

function getOppositeCharacter(character) {
  let result;
  if (character === "(") { result = ")" }
  if (character === "[") { result = "]" }
  if (character === "{") { result = "}" }
  if (character === "<") { result = ">" }
  return result;
}