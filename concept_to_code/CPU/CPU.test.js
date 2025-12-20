const { encodeInstruction } = require("./CPU");

test("cpu test", () => {
  expect(encodeInstruction("LOAD R1 R2 R3")).toBe("0x1283");
  expect(encodeInstruction("STORE R5 R3 R4")).toBe("0x3AC4");
  expect(encodeInstruction("LOAD R7 R2 30")).toBe("0x2EBE");
  expect(encodeInstruction("AND R3 R1 R6")).toBe("0x5646");
  expect(encodeInstruction("ADD R4 R2 R5")).toBe("0x7885");
  expect(encodeInstruction("SUB R4 R6 8")).toBe("0xA9A8");
  expect(encodeInstruction("MOV R4 250")).toBe("0xB8FA");
});
