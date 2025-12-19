const { STATES } = require("./const");

class OS {
  #processes;

  constructor(processes) {
    this.#processes = processes;
    this.taskQueue = this.#loadProcesses(processes);
    this.currProcess = undefined;
  }

  run() {
    setTimeout(() => {
      this.#selectNextProcess();
      //currProcess 존재할 경우: 실행 반복
      if (this.currProcess) {
        this.#runCyle();
        this.#printCurrInfo();
        this.#handleCompletion();
        this.run();
        return;
      }
      //더  이상 수행할 currProcess가 없는 경우: 수헹완료 상태 출력
      this.#printCurrInfo();
      console.log("모든 프로세스가 실행 완료됐습니다!");
    }, 1000);
  }

  //모든 process 상태 waiting으로 전환, taskQueue에 거꾸로 load
  #loadProcesses() {
    this.#processes.forEach((process) => process.updateState(STATES.waiting));
    return [...this.#processes].reverse();
  }

  //다음 실행할 process 고르기
  #selectNextProcess() {
    //taskQueue에 남은 process 없을 때: null 할당
    if (!this.taskQueue.length) {
      this.currProcess = null;
      return;
    }
    //taskQueue에 남은 process 있을 때: pop
    this.currProcess = this.taskQueue.pop();
  }

  #runCyle() {
    //상태 RUNNING으로 변경
    this.currProcess.updateState(STATES.running);
    // thread 개수만큼 실행시간을 더해준다.
    for (let i = 0; i < this.currProcess.threadCount; i++) {
      this.currProcess.addExecutionTime();
      //총 실행시간 === 필요실행시간 이 된 경우 실행시간 더하기를 멈춘다.
      if (
        this.currProcess.totalExecutionTime ===
        this.currProcess.requiredExecutionTime
      ) {
        break;
      }
    }
  }

  //모든 프로세스에 대해 .printInfo()
  #printCurrInfo() {
    this.#processes.forEach((process) => process.printInfo());
    console.log(".");
  }

  //한 사이클 돌고 taskQueue에 다시 넣을지, 종료시킬지 판단
  #handleCompletion() {
    //누적시간<필요실행시간 인 경우: 다시 taskqueue에 unshift(), 상태 WAITING으로 변경
    if (
      this.currProcess.totalExecutionTime <
      this.currProcess.requiredExecutionTime
    ) {
      this.taskQueue.unshift(this.currProcess);
      this.currProcess.updateState(STATES.waiting);
      return;
    }
    //누적시간=필요실행시간 인 경우: 상태 terminated로 변경
    this.currProcess.updateState(STATES.terminated);
  }
}

module.exports = OS;
