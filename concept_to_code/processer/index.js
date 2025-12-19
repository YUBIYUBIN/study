const { PROCESS_INFOS } = require("./const");

const createRandomProcesses = require("./createProcesses");
const OS = require("./OS");

//3개 process 랜덤으로 뽑기
const pickedProcesses = createRandomProcesses(PROCESS_INFOS, 3);

//
const os = new OS(pickedProcesses);
os.run();
