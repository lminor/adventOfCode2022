var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('day1/day1.txt')
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
  let finalElf3 = elves.length - 3;
  let finalElf2 = elves.length - 2;
  let finalElf = elves.length - 1;
  console.log("Elf with most calories = " + finalElf)
  console.log("His calories = " + elves[finalElf]);
  console.log("Last 3 elves calories combined." + elves[finalElf3] + elves[finalElf2] + elves[finalElf]);
});