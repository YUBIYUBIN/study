//1. 모듈 불러오기
const { constants } = require("buffer");
const readline = require("readline");

//2. 인터페이스(입출력 통로) 만들기
const rl = readline.createInterface({
  input: process.stdin, //input: 터미널에서 입력 받는 내용
  output: process.stdout, //output: 터미널에서 출력되는 내용
});
const coorArr = [];
rl.on("line", (line) => {
  coorArr.push(line);
  if (coorArr.length == 2) {
    rl.close();
  }
});
rl.on("close", () => {
  const [x, y] = coorArr.map((e) => parseInt(e));
  if (x > 0 && y > 0) {
    console.log(1);
  } else if (x < 0 && y > 00) {
    console.log(2);
  } else if (x < 0 && y < 0) {
    console.log(3);
  } else {
    console.log(4);
  }
});
