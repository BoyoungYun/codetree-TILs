function printMin(a = 0, b = 0, c = 0) {
    return Math.min(...[a, b, c]);
}

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
console.log(printMin(input[0], input[1], input[2]));