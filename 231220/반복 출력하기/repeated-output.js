function printStar(N) {
    for(let i=0; i<N; i++) {
        process.stdout.write("12345^&*()_\n");
    }
}
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
printStar(input);