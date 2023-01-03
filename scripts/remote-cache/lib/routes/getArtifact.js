module.exports = function getArtifact(request, reply) {
  reply.send("GET artifact" + request.params.hash);
};
