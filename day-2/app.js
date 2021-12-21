import { inputFile } from "../util/file-reader.js";
let data = inputFile();

part1();
part2();

function part1() {
  let horizontalPos = 0;
  let verticalPos = 0;

  data.forEach(command => {
    command = command.trim();
    const amount = parseInt(command[command.length - 1])

    if (command.includes("forward")) {
      horizontalPos += amount;
    } else if (command.includes("up")) {
      verticalPos -= amount;
    } else if (command.includes("down")) {
      verticalPos += amount;
    }
  })

  console.log("part 1:", "vertical:", verticalPos, "horizontal:", horizontalPos)
  console.log("part 1:", horizontalPos * verticalPos);
}

function part2() {
  let horizontalPos = 0;
  let verticalPos = 0;
  let aim = 0;

  data.forEach(command => {
    command = command.trim();
    const amount = parseInt(command[command.length - 1])

    if (command.includes("forward")) {
      horizontalPos += amount;
      verticalPos += amount * aim;
    } else if (command.includes("up")) {
      aim -= amount;
    } else if (command.includes("down")) {
      aim += amount;
    }
  })

  console.log("part 2:", "vertical:", verticalPos, "horizontal:", horizontalPos)
  console.log("part 2:", horizontalPos * verticalPos);

}