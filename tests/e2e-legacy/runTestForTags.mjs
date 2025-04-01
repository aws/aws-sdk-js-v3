import { join, resolve } from "path";
import { spawn } from "child_process";
import { getDirName } from "./getDirName.mjs";

const __dirname = getDirName();
const ROOT = resolve(join(__dirname, "..", ".."));

export const runTestForTags = (tagsToTest) => {
  if (tagsToTest.length === 0) {
    console.info("No clients with e2e-legacy test cases have changed.");
    return;
  }

  // Cucumber requires cwd to contain the test cases.
  const command = `${join("node_modules", ".bin", "cucumber-js")}`;
  const args = ["--fail-fast", "-t", `"${tagsToTest.join(" or ")}"`];
  console.info(`Running cucumber test: \n${command} ${args.join(" ")}`);

  const execOptions = { ...process, cwd: ROOT, encoding: "utf-8", shell: true };
  const cucumber = spawn(command, args, execOptions);
  cucumber.stdout.pipe(process.stdout);
  cucumber.stderr.pipe(process.stderr);
  cucumber.on("close", (code) => {
    process.exit(code);
  });
};
