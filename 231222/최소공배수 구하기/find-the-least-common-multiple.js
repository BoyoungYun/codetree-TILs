function printLCM(n, m) {
  let answer = [];
  for(let i=1; i<=m; i++) {
    for(let j=1; j<=n; j++) {
        if(n*i === m*j) {
            answer.push(n*i);
        }
    }
  }
  console.log(Math.min(...answer));
}
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

printLCM(input[0], input[1]);