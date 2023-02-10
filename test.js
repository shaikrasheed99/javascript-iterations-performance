const millionTimes = 1_000_000;
const arrayWithMillionZeros = Array(millionTimes).fill(0);

// Traditional while loop
console.time('Traditional while loop time');
let iterator = 0;
while (iterator < millionTimes) {
    iterator++;
}
console.timeEnd('Traditional while loop time');


// Traditional do-while loop
console.time('Traditional do-while loop time');
let index = 0;
do {
    index++;
} while (index < millionTimes);
console.timeEnd('Traditional do-while loop time');


// Traditional for loop
console.time('Traditional for loop time');
for (let index = 0; index < millionTimes; index++) {}
console.timeEnd('Traditional for loop time');


// For of loop
console.time('For of loop time');
for (let value of arrayWithMillionZeros) {}
console.timeEnd('For of loop time');


// For in loop
console.time('For in loop time');
for (let value in arrayWithMillionZeros) {}
console.timeEnd('For in loop time');


// Map method
console.time('Map method time');
arrayWithMillionZeros.map(() => {});
console.timeEnd('Map method time');


// Filter method
console.time('Filter method time');
arrayWithMillionZeros.filter(() => {});
console.timeEnd('Filter method time');


// Reduce method
console.time('Reduce method time');
arrayWithMillionZeros.reduce(() => {});
console.timeEnd('Reduce method time');


// Sort method
console.time('Sort method time');
arrayWithMillionZeros.sort(() => {});
console.timeEnd('Sort method time');


// Every method
console.time('Every method time');
arrayWithMillionZeros.every(value => value == 0);
console.timeEnd('Every method time');


// Some method
console.time('Some method time');
arrayWithMillionZeros.some(() => {});
console.timeEnd('Some method time');


// Chaining methods
console.time('Chaining methods time');
arrayWithMillionZeros.map(() => {})
                     .filter(() => {})
                     .sort(() => {})
                     .forEach(() => {});
console.timeEnd('Chaining methods time');