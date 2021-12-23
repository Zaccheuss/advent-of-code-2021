import { inputFile } from "../util/file-reader.js";

export function run() {
  const rawInput = inputFile("day-4/input.txt");

  const bingoNumbers = rawInput[0].split(",").map(Number);
  let boards = [];

  for (let i = 1; i < rawInput.length - 5; i += 6) {
    boards.push(
      [
        rawInput[i + 1].trim().replace(/  /g, " ").split(" ").map(Number),
        rawInput[i + 2].trim().replace(/  /g, " ").split(" ").map(Number),
        rawInput[i + 3].trim().replace(/  /g, " ").split(" ").map(Number),
        rawInput[i + 4].trim().replace(/  /g, " ").split(" ").map(Number),
        rawInput[i + 5].trim().replace(/  /g, " ").split(" ").map(Number)
      ]
    )
  }

  part1(bingoNumbers, boards);
}

function part1(bingoNumbers, boards) {
  for (let i = 0; i < bingoNumbers.length; i++) {
    const calledNumber = bingoNumbers[i]
    for (let j = 0; j < boards.length; j++) {
      let board = boards[j]
      board = fillBoardWithCalledNumber(board, calledNumber);
      if (checkIfBingo(board)) {
        console.log("called number:", calledNumber)
        console.log("part 1 score:", calculateScore(board, calledNumber));
        return;
      }
    }
  }
}

export function checkIfBingo(input) {
  const rotatedInput = input[0].map((val, index) => input.map(row => row[index]).reverse());

  for(let i = 0; i < input.length; i++) {
    if (
      isArrayEqual(input[i], Array(input.length).fill(-1)) ||
      isArrayEqual(rotatedInput[i], Array(rotatedInput.length).fill(-1))
    ) {
      return true;
    }
  }

  return false;
}

export function fillBoardWithCalledNumber(board, calledNumber) {
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if (board[i][j] === calledNumber) {
        board[i][j] = -1;
      }
    }
  }

  return board;
}

export function calculateScore(board, lastCalledNumber) {
  let sum = 0;

  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== -1) {
        sum += board[i][j];
      }
    }
  }

  return sum * lastCalledNumber;
}

export function isArrayEqual(a, b) {
  if (a === null || b === null) { return false }
  return JSON.stringify(a) === JSON.stringify(b);
}
