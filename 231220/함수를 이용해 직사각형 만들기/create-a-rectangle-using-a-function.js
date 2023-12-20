function printRect(n, m) {
    for(let i=0; i<n; i++)
    {
        let answer = '';
        for(let j=0; j<m; j++) {
            answer += '1';
        }
        console.log(answer);
    }
}
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

printRect(input[0], input[1]);