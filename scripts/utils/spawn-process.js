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

module.exports = { spawnProcess };
