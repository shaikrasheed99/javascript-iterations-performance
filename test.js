const millionTimes = 1_000_000;

console.time('Traditional for loop time: ');
for (let index = 0; index < millionTimes; index++) {}
console.timeEnd('Traditional for loop time: ');

const arrayWithMillionZeros = Array(millionTimes).fill(0);

console.time('For of loop time: ');
for (let value of arrayWithMillionZeros) {}
console.timeEnd('For of loop time: ');