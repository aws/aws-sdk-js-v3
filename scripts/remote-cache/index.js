const fastify = require("fastify")({ logger: true });

fastify.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});
fastify.get("/v8/artifacts/:hash", require("./lib/routes/getArtifact"));
fastify.put("/v8/artifacts/:hash", require("./lib/routes/putArtifact"));
fastify.get("/v2/user", require("./lib/routes/getUser"));
fastify.get("/v2/teams", require("./lib/routes/getTeams"));

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
