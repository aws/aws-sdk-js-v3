const { spawn } = require("child_process");

const spawnProcess = (command, args = [], options = {}) =>
  new Promise((resolve, reject) => {
    try {
      const ls = spawn(command, args, options);
      ls.stdout.on("data", data => {
        console.log(data.toString());
      });
      ls.stderr.on("data", data => {
        console.error(`stderr: ${data.toString()}`);
      });

      ls.on("close", code => {
        console.log(`child process exited with code ${code}`);
        resolve();
      });
    } catch (e) {
      reject(e);
    }
  });

module.exports = { spawnProcess };
