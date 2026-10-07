const { spawnSync } = require("node:child_process");
const Path = require("node:path");
const { packages } = require("../package-lock.json");

const projectDirectory = Path.resolve(__dirname, "..");
const testArguments = ["--prod", "--reporter=verbose"];
const useDocker = process.platform === "darwin";

let command = "stencil-test";
let argumentsList = testArguments;

if (useDocker) {
  const playwrightVersion = packages["node_modules/playwright"].version;
  const containerImage = `mcr.microsoft.com/playwright:v${playwrightVersion}-noble`;

  console.log(`Running component tests in ${containerImage}`);
  command = "docker";
  argumentsList = [
    "run",
    "--rm",
    "--volume",
    `${projectDirectory}:/workspace`,
    "--volume",
    "/workspace/node_modules",
    "--workdir",
    "/workspace",
    containerImage,
    "sh",
    "-lc",
    "npm ci && npx stencil-test --prod --reporter=verbose",
  ];
}

const result = spawnSync(command, argumentsList, { stdio: "inherit" });

if (result.error) {
  console.error(result.error.message);
  process.exitCode = 1;
} else {
  process.exitCode = result.status ?? 1;
}
