const S3StorageImpl = require("../../services/S3StorageImpl");

module.exports = async function putArtifact(request, reply) {
  const teamId = request.query.teamId ?? request.query.slug;

  S3StorageImpl.instance.write(request.params.hash, request.body);
  return { urls: [`${teamId}/${request.params.hash}`] };
};
