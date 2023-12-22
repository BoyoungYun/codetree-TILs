function isEvenAndFive(num) {
    return num % 2 === 0 && (parseInt(num / 10) + (num % 10)) % 5 === 0
}

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
if(isEvenAndFive(input)) console.log('Yes');
else console.log('No');