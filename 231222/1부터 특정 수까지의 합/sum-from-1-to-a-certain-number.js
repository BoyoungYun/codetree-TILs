function divideTen(N) {
    let sum = 0;
    for(let i=1; i<=N; i++) {
        sum += i;
    }
    return parseInt(sum / 10);
}
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(divideTen(input))