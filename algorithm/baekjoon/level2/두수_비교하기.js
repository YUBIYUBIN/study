//1. 모듈 불러오기
const readline = require("readline");

//2. 인터페이스(입출력 통로) 만들기
const rl = readline.createInterface({
  input: process.stdin, //input: 터미널에서 입력 받는 내용
  output: process.stdout, //output: 터미널에서 출력되는 내용
});
let num1;
let num2;
rl.on("line", (line) => {
  [num1, num2] = line.split(" ").map((e) => parseInt(e));
}).on("close", () => {
  if (num1 > num2) {
    console.log(">");
  }
  if (num1 < num2) {
    console.log("<");
  }
  if (num1 === num2) {
    console.log("==");
  }
});
