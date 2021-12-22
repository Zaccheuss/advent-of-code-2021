import { inputFile } from "../util/file-reader.js";
let data = inputFile();

part1();
part2();

function part1() {
  let sumArray = Array(data[0].length - 1).fill(0);

  data.forEach(reading => {
    sumArray = sumArray.map((value, index) => parseInt(value) + parseInt(reading[index]));
  })

  const mostCommonNumbers = sumArray.map(value => Math.round(value / data.length));
  const leastCommonNumbers = sumArray.map(value => Math.round(value / data.length)).map(value => value === 0 ? 1 : 0);

  const gammaRate = parseInt(mostCommonNumbers.join(""), 2);
  const epsilonRate = parseInt(leastCommonNumbers.join(""), 2);

  console.log("Power Consumption:", gammaRate * epsilonRate);
}

function part2() {
  let tempData = data;
  for (let i = 0; i < data[0].length; i++) {
    let sum = 0;
    tempData.forEach(element => {
      sum += parseInt(element[i])
    });

    let filterValue = Math.round(sum / tempData.length);

    if (tempData.length === 1) {
      break;
    }
    
    tempData = tempData.filter(element => parseInt(element[i]) === filterValue);
  }

  const oxygenRating = parseInt(tempData[0], 2)
  console.log("Oxygen Rating:", oxygenRating);

  tempData = data;
  for (let i = 0; i < data[0].length; i++) {
    let sum = 0;
    tempData.forEach(element => {
      sum += parseInt(element[i])
    });

    let filterValue = Math.round(sum / tempData.length);

    if (tempData.length === 1) {
      break;
    }

    tempData = tempData.filter(element => parseInt(element[i]) !== filterValue);
  }

  const co2ScrubberRating = parseInt(tempData[0], 2)
  console.log("CO2 Scrubber Rating:", co2ScrubberRating);

  console.log("Life Support Rating:", oxygenRating * co2ScrubberRating)
}