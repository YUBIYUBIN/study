//UTIL
//0이상~ n미만 수 중 랜덤 수 뽑기
const getRandomInt = (exclusiveMax) => {
  return Math.floor(Math.random() * exclusiveMax);
};

module.exports = { getRandomInt };
