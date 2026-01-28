// @ts-check
const { spawn } = require("child_process");
const { join } = require("path");

const spawnProcess = async (command, args = [], options = {}) => {
  // set AWS_PARTITIONS_FILE_OVERRIDE for gradle commands to ensure
  // Smithy uses the SDK's up-to-date partitions.json instead of its bundled version.
  if (command === "./gradlew") {
    const hasPartitionsOverride = options.env && options.env.AWS_PARTITIONS_FILE_OVERRIDE;
    if (!hasPartitionsOverride) {
      options = {
        ...options,
        env: {
          ...process.env,
          ...(options.env || {}),
          AWS_PARTITIONS_FILE_OVERRIDE: join(
            __dirname,
            "..",
            "..",
            "packages",
            "util-endpoints",
            "src",
            "lib",
            "aws",
            "partitions.json"
          ),
        },
      };
    }
  }

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
