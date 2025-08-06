/**
 * This script analyzes the collection of AWS service models.
 */

const path = require("node:path");
const fs = require("node:fs");

const root = path.join(__dirname, "..", "..");

const models = path.join(root, "codegen", "sdk-codegen", "aws-models");

for (const file of fs.readdirSync(models)) {
  if (file.endsWith(".json")) {
    const model = require(path.join(models, file));
    const shapes = model.shapes;
    const service = Object.entries(shapes).find(([id, s]) => s.type === "service");
    const operations = Object.entries(shapes).filter(([id, s]) => {
      return s.type === "operation";
    });
    const protocol = Object.entries(service[1].traits).find(([id, trait]) => id.startsWith("aws.protocol"))[0];

    if (protocol.includes("rest")) {
      const inputOutputShapes = Object.entries(shapes).filter(([id, s]) => {
        return (
          (s.traits?.["smithy.api#input"] || s.traits?.["smithy.api#output"]) && s.type === "structure" && s.members
        );
      });
      for (const [id, ioShape] of inputOutputShapes) {
        const hasCompleteHttpBindings =
          Object.values(ioShape.members ?? {}).filter((member) => {
            return Object.keys(member?.traits ?? {}).filter((trait) => trait.includes("http"));
          }).length === Object.keys(ioShape.members).length;
        if (hasCompleteHttpBindings) {
          // console.log(`✅ complete http bindings for operation ${id}`);
        } else {
          /**
           * This flags an operation that has incomplete HTTP bindings. This is valid, but
           * would currently be considered unusual for AWS SDK models. As of writing there
           * are no such cases.
           */
          console.log(`❌ incomplete http bindings for operation ${id}`);
        }
      }

      const eventStreamShapes = Object.entries(shapes).filter(
        ([id, s]) => s.type === "union" && s.traits["smithy.api#streaming"]
      );

      const eventStreamInputMembers = Object.entries(shapes).filter(([id, s]) => {
        return (
          s.traits?.["smithy.api#input"] &&
          s.type === "structure" &&
          Object.entries(s.members).find(([name, member]) => {
            return eventStreamShapes.find(([_id, s]) => _id === member.target);
          })
        );
      });
      const eventStreamOutputMembers = Object.entries(shapes).filter(([id, s]) => {
        return (
          s.traits?.["smithy.api#output"] &&
          s.type === "structure" &&
          Object.entries(s.members).find(([name, member]) => {
            return eventStreamShapes.find(([_id, s]) => _id === member.target);
          })
        );
      });

      const eventStreamInputOperations = operations.filter(([id, op]) => {
        return eventStreamInputMembers.find(([_id, s]) => _id === op.input.target);
      });
      const eventStreamOutputOperations = operations.filter(([id, op]) => {
        return eventStreamOutputMembers.find(([_id, s]) => _id === op.output.target);
      });

      if (eventStreamShapes.length) {
        console.log("=".repeat(99));

        /**
         * This reports the services that have event stream operations and lists them.
         */
        console.log({
          service: service[0],
          operations: operations.length,
          protocol,
          eventStreamInputOperations: eventStreamInputOperations.map(([id, op]) => id),
          eventStreamOutputOperations: eventStreamOutputOperations.map(([id, op]) => id),
        });

        /**
         * This reports the shapes that are input/outputs of event stream operations and whether
         * they have complete HTTP bindings modeled.
         */
        for (const group of [eventStreamInputMembers, eventStreamOutputMembers]) {
          for (const [id, struct] of group) {
            console.log(id, ":");
            const members = struct.members ?? {};

            const hasCompleteHttpBindings =
              Object.values(members).filter((member) => {
                return Object.keys(member.traits).filter((trait) => trait.includes("http"));
              }).length === Object.keys(members).length;

            if (hasCompleteHttpBindings) {
              console.log("✅ complete http bindings");
            } else {
              console.log("❌ incomplete http bindings");
            }

            const payloadBindingMember = Object.values(members).find((member) => {
              return member.traits?.["smithy.api#httpPayload"];
            });
            const payloadBindingIsEventStream = eventStreamShapes.find(([id, s]) => id === payloadBindingMember.target);

            if (payloadBindingIsEventStream) {
              console.log("✅ payload binding is event stream");
            } else {
              console.log("❌ payload binding is not event stream. How would that even work?");
            }
            for (const [memberName, member] of Object.entries(members)) {
              console.log(
                "  ",
                memberName,
                Object.keys(member.traits).filter((trait) => trait.includes("http"))
              );
            }
          }
        }
      }
    }
  }
}
