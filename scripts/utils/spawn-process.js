// @ts-check
const { spawn } = require("child_process");

const spawnProcess = async (command, args = [], options = {}) => {
  const childProcess = spawn(command, args, options);

  childProcess.stdout?.pipe(process.stdout);
  childProcess.stderr?.pipe(process.stderr);

  return new Promise((resolve, reject) => {
    childProcess.on("error", reject);
    childProcess.on("exit", (code, signal) =>
      code === 0 ? resolve(0) : reject(`${command} failed with { code: ${code}, signal: ${signal} }`)
    );
  });
};

const spawnProcessReturnValue = async (command, args = [], options = {}) => {
  const childProcess = spawn(command, args, options);

  let buffer = "";
  let errBuffer = "";
  childProcess.stdout.on("data", (data) => {
    buffer += data.toString();
  });
  childProcess.stderr.on("data", (data) => {
    errBuffer += data.toString();
  });

  return new Promise((resolve, reject) => {
    childProcess.on("error", reject);
    childProcess.on("exit", (code, signal) => (code === 0 ? resolve(buffer) : reject(errBuffer)));
  });
};

module.exports = { spawnProcess, spawnProcessReturnValue };
