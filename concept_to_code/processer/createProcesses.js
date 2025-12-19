const { getRandomInt } = require("./util");
const Process = require("./process");

const createRandomProcesses = (processInfos, count) => {
  const pickedProcessInfos = pickRandomProcessInfos(count);
  return createProcessesFromInfos(pickedProcessInfos);

  // Array(n) -> m개의 요소 뽑기
  //count개의 process 인덱스를 뽑기
  // TODO: util성 코드로 이관
  function pickRandomProcessInfos(count) {
    const pickedProcessIndexes = [];
    while (pickedProcessIndexes.length !== count) {
      pickedProcessIndexes.push(getRandomInt(processInfos.length));
    }

    return pickedProcessIndexes.map((e) => processInfos[e]);
  }

  //뽑은 process정보들로 process 인스턴스들 생성하기
  function createProcessesFromInfos(processInfos) {
    const processes = [];
    processInfos.forEach((processInfo) =>
      processes.push(new Process(processInfo))
    );
    return processes;
  }
};

module.exports = createRandomProcesses;
