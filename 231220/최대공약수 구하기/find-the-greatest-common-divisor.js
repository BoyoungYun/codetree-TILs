function printGCD(n, m) {
    let answer = 0;
    for(let i=2; i<=m; i++) {
        if(n%i === 0 && m%i === 0) {
            answer = i;
        }
    }
    console.log(answer);
}
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
printGCD(input[0], input[1]);