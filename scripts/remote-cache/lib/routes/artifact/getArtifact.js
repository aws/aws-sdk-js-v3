const S3StorageImpl = require("../../services/S3StorageImpl");

module.exports = async function getArtifact(request, reply) {
  return S3StorageImpl.instance.read(request.params.hash).catch(() => {
    reply.status(404).send("not found: " + request.params.hash);
  });
};
