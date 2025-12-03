//1. 모듈 불러오기
const readline = require("readline");

//2. 인터페이스(입출력 통로) 만들기
const rl = readline.createInterface({
  input: process.stdin, //input: 터미널에서 입력 받는 내용
  output: process.stdout, //output: 터미널에서 출력되는 내용
});

const arr = [];
let h;
let m;
let t;
rl.on("line", (line) => {
  arr.push(line.split(" ").map((e) => parseInt(e)));
  if (arr.length === 2) {
    rl.close();
  }
});
rl.on("close", () => {
  [[h, m], [t]] = arr;

  if (m + t < 60) {
    console.log(`${h} ${m + t}`);
  } else {
    while (m + t - 60 >= 60) {
      m -= 60;
      h += 1;
    }

    console.log(`${(h + 1) % 24} ${m + t - 60}`);
  }
});
