const fastify = require("fastify")({ logger: process.argv.includes("log") });

fastify.addContentTypeParser(
  "application/octet-stream",
  { parseAs: "buffer", bodyLimit: Infinity },
  async function parser(request, payload) {
    return payload;
  }
);

fastify.get("/", (request, reply) => {
  reply.send({ status: "OK" });
});
fastify.get("/v8/artifacts/:hash", require("./lib/routes/artifact/getArtifact"));
fastify.put("/v8/artifacts/:hash", require("./lib/routes/artifact/putArtifact"));
fastify.post("/v8/artifacts/events", require("./lib/routes/artifact/postEvents"));
fastify.get("/v2/user", require("./lib/routes/getUser"));
fastify.get("/v2/teams", require("./lib/routes/getTeams"));

const port = 3000;

module.exports = {
  async start() {
    fastify.listen({ port }, (err) => {
      if (err) {
        fastify.log.error(err);
        process.exit(1);
      }
    });
    await new Promise((r) => setTimeout(r, 2000)); // built-in delay to allow server to start up.
    console.log("Started turborepo-remote-cache on:", port);
    return fastify;
  },
  async stop() {
    await new Promise((r) => setTimeout(r, 2000)); // delay before shutting down server.
    await fastify.close();
    console.log("Remote cache server closed.");
  },
};

if (process.argv.includes("start")) {
  module.exports.start();
}

if (process.argv.includes("stop")) {
  const { spawnProcess } = require("../utils/spawn-process");
  spawnProcess("npx", ["kill-port", port.toString()]);
}
