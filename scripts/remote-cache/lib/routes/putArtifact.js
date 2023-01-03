module.exports = function putArtifact(request, reply) {
  reply.send("PUT artifact " + request.params.hash);
};
