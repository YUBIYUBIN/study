//1. 모듈 불러오기
const { constants } = require("buffer");
const readline = require("readline");

//2. 인터페이스(입출력 통로) 만들기
const rl = readline.createInterface({
  input: process.stdin, //input: 터미널에서 입력 받는 내용
  output: process.stdout, //output: 터미널에서 출력되는 내용
});

let num1;
let num2;
let num3;
rl.on("line", (line) => {
  [num1, num2, num3] = line.split(" ").map((e) => parseInt(e));
  rl.close();
});
rl.on("close", () => {
  if (num1 === num2 && num2 === num3) {
    console.log(10000 + num1 * 1000);
  } else if (num1 === num2 || num2 === num3 || num1 === num3) {
    let N;
    if (num1 === num2 || num1 === num3) {
      N = num1;
    } else {
      N = num2;
    }
    console.log(1000 + N * 100);
  } else {
    console.log(Math.max(num1, num2, num3) * 100);
  }
});
