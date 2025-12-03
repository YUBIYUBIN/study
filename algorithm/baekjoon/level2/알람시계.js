//1. 모듈 불러오기
const readline = require("readline");

//2. 인터페이스(입출력 통로) 만들기
const rl = readline.createInterface({
  input: process.stdin, //input: 터미널에서 입력 받는 내용
  output: process.stdout, //output: 터미널에서 출력되는 내용
});
let h;
let m;
rl.on("line", (line) => {
  [h, m] = line.split(" ").map((e) => parseInt(e));
  rl.close();
});
rl.on("close", () => {
  if (m >= 45) {
    console.log(`${h} ${m - 45}`);
  } else {
    if (h === 0) {
      h = 24;
    }
    console.log(`${h - 1} ${m + 15}`);
  }
});
