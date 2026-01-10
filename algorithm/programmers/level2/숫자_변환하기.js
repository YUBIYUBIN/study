const solution = (x, y, n) => {
  const remainder = y % x;

  const quotient = Math.floor(y / x);

  //나머지가 n과 2,3곱 형태로 이루어졌는지 판별
  hasOnlyFactors2And3(n, num);

  //몫이 2,3곱 형태로 이루어졌는지 판별
  //1. 이루어졌으면 수 return
  //2. 안 이루어졌으면 hasOnlyFactors2And3(n)해보기
  //    2-1.이루어졌으면 수 return
  //    2-2.안 이루어졌으면 -n하고 hasOnlyFactors2And3(n) 해보기
  //        2-2-1. 이루어졌으면 수 return
  //        2-2-2. 안 이루어졌으면 재귀 - 탈출 조건: 0이하 되면

  function hasOnlyFactors2And3(n, num) {
    while (num % 2 === 0) {}
  }
};
