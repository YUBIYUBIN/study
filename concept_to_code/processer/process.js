class Process {
  requiredExecutionTime;

  constructor(processInfo) {
    this.name = processInfo.name;
    this.state = "READY";
    this.totalExecutionTime = 0;
    this.requiredExecutionTime = processInfo.requiredExecutionTime;
    this.threadCount = this.#calculateThreadCount();
  }

  //이름(상태), thread수, 실행시간 / 필요실행시간 sec 출력
  printInfo() {
    console.log(
      `${this.name}(${this.state}), ${this.threadCount}, ${this.totalExecutionTime}/${this.requiredExecutionTime} sec`
    );
  }

  updateState(state) {
    this.state = state;
  }
  addExecutionTime() {
    this.totalExecutionTime += 1;
  }

  //생성할 Thread 수 계산
  #calculateThreadCount() {
    return (this.requiredExecutionTime - (this.requiredExecutionTime % 2)) / 2;
  }
}
module.exports = Process;
