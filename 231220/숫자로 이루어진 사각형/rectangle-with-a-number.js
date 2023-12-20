function printRect(N) {
    let answer = '';
    let cnt = 0;
    for(let i=0; i<N; i++) {
        for(let j=0; j<N; j++) {
            if(cnt >= 9) cnt = 0;
            cnt++;
            answer += (cnt + ' ');
        }
        answer += '\n';
    }
    console.log(answer);
}
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

printRect(input);