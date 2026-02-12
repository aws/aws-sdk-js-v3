/**
 * This script analyzes consistency between ec2QueryName and xmlName traits
 * in the EC2 model.
 */

const path = require("node:path");
const fs = require("node:fs");

const root = path.join(__dirname, "..", "..");

const ec2 = path.join(root, "codegen", "sdk-codegen", "aws-models", "ec2.json");

const model = require(ec2);
const shapes = model.shapes;
const service = Object.entries(shapes).find(([id, s]) => s.type === "service");
const operations = Object.entries(shapes).filter(([id, s]) => {
  return s.type === "operation";
});
const protocol = Object.entries(service[1].traits).find(
  ([id, trait]) => id.startsWith("aws.protocol") || id.startsWith("smithy.protocol")
)[0];

const data = {
  total: 0,
  hasXmlName: 0,
  hasEc2QueryName: 0,
  mismatch: 0,
};

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

function check(id, traits = {}, name) {
  data.total++;
  const [x, e] = [traits["smithy.api#xmlName"], traits["aws.protocols#ec2QueryName"]];
  if (x) {
    data.hasXmlName++;
  }
  if (e) {
    data.hasEc2QueryName++;
  }

  if (e && e !== (capitalize(x) ?? name)) {
    data.mismatch++;
    console.log("mismatch", id, "xmlName:", x, "ec2QueryName:", e, "memberName:", name);
  }
}

for (const [id, shape] of Object.entries(shapes)) {
  const { traits = {} } = shape;
  check(id, traits);
  const { member, members } = shape;
  if (member) {
    const { traits = {} } = member;
    check(id + "$member", traits, "member");
  }
  for (const [name, member] of Object.entries(members ?? {})) {
    const { traits = {} } = member;
    check(id + "$" + name, traits, name);
  }
}
console.log(data);

/*
mismatch com.amazonaws.ec2#InstanceNetworkInterfaceSpecification$Ipv6Addresses
  xmlName: ipv6AddressesSet ec2QueryName: Ipv6Addresses memberName: Ipv6Addresses
mismatch com.amazonaws.ec2#InstanceNetworkInterfaceSpecification$PrivateIpAddresses
  xmlName: privateIpAddressesSet ec2QueryName: PrivateIpAddresses memberName: PrivateIpAddresses

{ total: 17731, hasXmlName: 6914, hasEc2QueryName: 5529, mismatch: 2 }
 */
