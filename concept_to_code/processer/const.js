//CONST
const STATES = {
  ready: "READY",
  running: "RUNNING",
  waiting: "WAITING",
  terminated: "TERMINATED",
};

const PROCESS_INFOS = [
  { name: "A", requiredExecutionTime: 3 },
  { name: "B", requiredExecutionTime: 5 },
  { name: "C", requiredExecutionTime: 7 },
  { name: "D", requiredExecutionTime: 10 },
];

module.exports = { STATES, PROCESS_INFOS };
