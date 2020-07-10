const { spawn } = require("child_process");

exports.spawnPromise = (command, options, spawnOptions) =>
  new Promise((resolve, reject) => {
    const ps = spawn(command, options, {
      stdio: "inherit",
      ...spawnOptions,
    });
    ps.on("error", reject);
    ps.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error(`Unexpected exit code [${code}]`));
      } else {
        resolve();
      }
    });
  });
