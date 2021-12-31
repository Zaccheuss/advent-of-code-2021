import { inputFile } from "../util/file-reader.js";

export function run() {
  let rawInput = inputFile("day-10/input.txt").map(x => x.replace("\r", ""));

  let corruptedScore = 0;
  rawInput.forEach(line => {
    corruptedScore += getCorruptedLineScore(line);
  })
  console.log("part 1:", corruptedScore);
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
        return getPoints(line[i])
      }
    }
  }

  return 0;
}

export function isOppositeCharacter(openingChar, closingChar) {
  const result = 
    (openingChar === "(" && closingChar === ")") ||
    (openingChar === "<" && closingChar === ">") ||
    (openingChar === "{" && closingChar === "}") ||
    (openingChar === "[" && closingChar === "]")

  return result;
}

function getPoints(character) {
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