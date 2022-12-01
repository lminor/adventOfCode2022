var fileLineArray = [];
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('day1.txt')
});

let elf = 0;
let elves = [];
let elfCount = 0;

lineReader.on('line', function (line) {
  if (line == '') {
    elves[elf] = elfCount;
    elfCount = 0;
    elf++
  }
  else {
    elfCount += eval(line)
  }
});

lineReader.on('close', function () {
  console.log('Last Elf = ' + elf);
  elves.sort(function (a, b) { return a - b })
  let finalElf = elves.length - 1;
  console.log("Elf with most Calories = " + finalElf)
  console.log("His calories = " + elves[finalElf]);
});