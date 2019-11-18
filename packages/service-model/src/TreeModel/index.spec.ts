import { fromModelJson } from "./";
import { deepCopy } from "./deepCopy.fixture";
import { minimalShapeMap } from "../ApiModel/shapeMap.fixture";
import {
  minimalValidServiceMetadata,
  timestampValidServiceMetadata
} from "../ApiModel/serviceMetadata.fixture";
import {
  Blob,
  Float,
  Integer,
  List,
  Map,
  String,
  Timestamp
} from "@aws-sdk/types";
import {
  OperationMap,
  Structure,
  ShapeMap,
  TreeModelList,
  TreeModelMap,
  TreeModelString
} from "@aws-sdk/build-types";

describe("TreeModel parser", () => {
  it("should throw when input cannot be parsed with JSON.parse", () => {
    expect(() => {
      const api = fromModelJson("foo");
    }).toThrow();
  });

  it("should throw when input has no metadata", () => {
    expect(() => {
      const api = fromModelJson(
        JSON.stringify({
          operations: {},
          shapes: {}
        })
      );
    }).toThrow();
  });

  it("should throw when input has no operations", () => {
    expect(() => {
      const api = fromModelJson(
        JSON.stringify({
          metadata: minimalValidServiceMetadata,
          shapes: {}
        })
      );
    }).toThrow();
  });

  it("should throw when input has no shapes", () => {
    expect(() => {
      const api = fromModelJson(
        JSON.stringify({
          metadata: minimalValidServiceMetadata,
          operations: {}
        })
      );
    }).toThrow();
  });

  it('should throw when input has a "documentation" property that is not a string', () => {
    expect(() => {
      const api = fromModelJson(
        JSON.stringify({
          metadata: minimalValidServiceMetadata,
          operations: {},
          shapes: {},
          documentation: null
        })
      );
    }).toThrow();
  });

  it("should sanitize shape names that clash with JS reserved words or globally-scoped constructors", () => {
    const shapes: ShapeMap = {
      GetFooInput: {
        type: "structure",
        members: {
          createdAt: { shape: "Date" },
          object: { shape: "Object" },
          reserved: { shape: "instanceof" }
        }
      },
      Date: {
        type: "timestamp"
      },
      Error: {
        type: "structure",
        members: {}
      },
      instanceof: {
        type: "string"
      },
      Object: {
        type: "blob"
      }
    };
    const operations: OperationMap = {
      GetFoo: {
        name: "GetFoo",
        http: {
          method: "GET",
          requestUri: "/"
        },
        input: { shape: "GetFooInput" },
        errors: [{ shape: "Error" }]
      }
    };
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        shapes,
        operations
      })
    );

    expect(api.operations.GetFoo.input.shape.name).toBe("GetFooInput");
    expect(api.shapes.Date).not.toBeDefined();
    expect(api.shapes._Date).toBeDefined();
    expect(api.shapes.Error).not.toBeDefined();
    expect(api.shapes._Error).toBeDefined();
    expect(api.shapes.instanceof).not.toBeDefined();
    expect(api.shapes._instanceof).toBeDefined();
    expect(api.shapes.Object).not.toBeDefined();
    expect(api.shapes._Object).toBeDefined();
  });

  it("should preserve sensitive traits on all types", () => {
    const shapes = deepCopy(minimalShapeMap);
    const GetFooOutput: Structure = {
      type: "structure",
      members: {}
    };
    Object.keys(minimalShapeMap).forEach(shapeName => {
      shapes[shapeName].sensitive = true;
      GetFooOutput.members[shapeName] = { shape: shapeName };
    });
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          ...shapes,
          GetFooOutput
        }
      })
    );

    const { members } = api.operations.GetFoo.output.shape;
    Object.keys(members).forEach(memberName => {
      expect(members[memberName].shape.sensitive).toBe(true);
    });
  });

  it("should preserve min traits on lists", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          Foo: {
            type: "list",
            member: { shape: "FooMember" },
            min: 10
          },
          FooMember: { type: "string" },
          GetFooOutput: {
            type: "structure",
            members: {
              foo: { shape: "Foo" }
            }
          }
        }
      })
    );

    const { shape } = api.operations.GetFoo.output.shape.members.foo;
    expect((shape as List).min).toBe(10);
  });

  it("should preserve min traits on integers", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          Foo: {
            type: "integer",
            min: 10
          },
          GetFooOutput: {
            type: "structure",
            members: {
              foo: { shape: "Foo" }
            }
          }
        }
      })
    );

    const { shape } = api.operations.GetFoo.output.shape.members.foo;
    expect((shape as Integer).min).toBe(10);
  });

  it("should preserve min traits on floats", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          Foo: {
            type: "float",
            min: 10
          },
          GetFooOutput: {
            type: "structure",
            members: {
              foo: { shape: "Foo" }
            }
          }
        }
      })
    );

    const { shape } = api.operations.GetFoo.output.shape.members.foo;
    expect((shape as Float).min).toBe(10);
  });

  it("should preserve min traits on strings", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          Foo: {
            type: "string",
            min: 10
          },
          GetFooOutput: {
            type: "structure",
            members: {
              foo: { shape: "Foo" }
            }
          }
        }
      })
    );

    const { shape } = api.operations.GetFoo.output.shape.members.foo;
    expect((shape as String).min).toBe(10);
  });

  it("should preserve flattened traits on lists", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          Foo: {
            type: "list",
            member: { shape: "FooMember" },
            flattened: true
          },
          FooMember: { type: "string" },
          GetFooOutput: {
            type: "structure",
            members: {
              foo: { shape: "Foo" }
            }
          }
        }
      })
    );

    const { shape } = api.operations.GetFoo.output.shape.members.foo;
    expect((shape as List).flattened).toBe(true);
  });

  it("should preserve flattened traits on maps", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          Foo: {
            type: "map",
            key: { shape: "FooKey" },
            value: { shape: "FooValue" },
            flattened: true
          },
          FooKey: { type: "string" },
          FooValue: { type: "string" },
          GetFooOutput: {
            type: "structure",
            members: {
              foo: { shape: "Foo" }
            }
          }
        }
      })
    );

    const { shape } = api.operations.GetFoo.output.shape.members.foo;
    expect((shape as Map).flattened).toBe(true);
  });

  it("should preserve flattened traits on maps", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          Foo: {
            type: "map",
            key: { shape: "FooKey" },
            value: { shape: "FooValue" },
            flattened: true
          },
          FooKey: { type: "string" },
          FooValue: { type: "string" },
          GetFooOutput: {
            type: "structure",
            members: {
              foo: { shape: "Foo" }
            }
          }
        }
      })
    );

    const { shape } = api.operations.GetFoo.output.shape.members.foo;
    expect((shape as Map).flattened).toBe(true);
  });

  it("should preserve jsonValue traits on strings", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          Foo: {
            type: "string",
            jsonValue: true
          },
          GetFooOutput: {
            type: "structure",
            members: {
              foo: { shape: "Foo" }
            }
          }
        }
      })
    );

    const { shape } = api.operations.GetFoo.output.shape.members.foo;
    expect((shape as String).jsonValue).toBe(true);
  });

  it("should preserve idempotencyToken traits on strings", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          Foo: {
            type: "string",
            idempotencyToken: true
          },
          GetFooOutput: {
            type: "structure",
            members: {
              foo: { shape: "Foo" }
            }
          }
        }
      })
    );

    const { shape } = api.operations.GetFoo.output.shape.members.foo;
    expect((shape as String).idempotencyToken).toBe(true);
  });

  it("should preserve enum traits on strings", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          Foo: {
            type: "string",
            enum: ["fizz", "buzz", "pop"]
          },
          GetFooOutput: {
            type: "structure",
            members: {
              foo: { shape: "Foo" }
            }
          }
        }
      })
    );

    const { shape } = api.operations.GetFoo.output.shape.members.foo;
    expect((shape as TreeModelString).enum).toEqual(["fizz", "buzz", "pop"]);
  });

  it("should preserve streaming traits on blobs", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          Foo: {
            type: "blob",
            streaming: true
          },
          GetFooOutput: {
            type: "structure",
            members: {
              foo: { shape: "Foo" }
            }
          }
        }
      })
    );

    const { shape } = api.operations.GetFoo.output.shape.members.foo;
    expect((shape as Blob).streaming).toBe(true);
  });

  it("should preserve timestampFormat traits on timestamps", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          Foo: {
            type: "timestamp",
            timestampFormat: "atom"
          },
          GetFooOutput: {
            type: "structure",
            members: {
              foo: { shape: "Foo" }
            }
          }
        }
      })
    );

    const { shape } = api.operations.GetFoo.output.shape.members.foo;
    expect((shape as Timestamp).timestampFormat).toBe("atom");
  });

  it("should prefer timestampFormat traits on timestamps over service metadata", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: timestampValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          Foo: {
            type: "timestamp",
            timestampFormat: "atom"
          },
          GetFooOutput: {
            type: "structure",
            members: {
              foo: { shape: "Foo" }
            }
          }
        }
      })
    );

    const { shape } = api.operations.GetFoo.output.shape.members.foo;
    expect((shape as Timestamp).timestampFormat).toBe("atom");
  });

  it("should use service metadata timestampFormat if trait not present on timestamps", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: timestampValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          Foo: {
            type: "timestamp"
          },
          GetFooOutput: {
            type: "structure",
            members: {
              foo: { shape: "Foo" }
            }
          }
        }
      })
    );

    const { shape } = api.operations.GetFoo.output.shape.members.foo;
    expect((shape as Timestamp).timestampFormat).not.toBeUndefined();
    expect((shape as Timestamp).timestampFormat).toBe(
      timestampValidServiceMetadata.timestampFormat
    );
  });

  it("should preserve required traits on structures", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          Foo: {
            type: "timestamp",
            timestampFormat: "atom"
          },
          GetFooOutput: {
            type: "structure",
            required: ["foo"],
            members: {
              foo: { shape: "Foo" }
            }
          }
        }
      })
    );

    expect(api.operations.GetFoo.output.shape.required).toEqual(["foo"]);
  });

  it("should preserve payload traits on structures", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          Foo: {
            type: "timestamp",
            timestampFormat: "atom"
          },
          GetFooOutput: {
            type: "structure",
            payload: "foo",
            members: {
              foo: { shape: "Foo" }
            }
          }
        }
      })
    );

    expect(api.operations.GetFoo.output.shape.payload).toEqual("foo");
  });

  it("should preserve exception traits on structures", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            errors: [{ shape: "GetFooException" }]
          }
        },
        shapes: {
          GetFooException: {
            type: "structure",
            exception: true,
            members: {}
          }
        }
      })
    );

    expect(api.operations.GetFoo.errors[0].shape.exception).toEqual(true);
  });

  it("should preserve error codes on structures", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            errors: [{ shape: "GetFooException" }]
          }
        },
        shapes: {
          GetFooException: {
            type: "structure",
            exception: true,
            error: { code: "PANIC" },
            members: {}
          }
        }
      })
    );

    expect(api.operations.GetFoo.errors[0].shape.exceptionCode).toEqual(
      "PANIC"
    );
  });

  it("should standardize xmlNamespace traits on structures", () => {
    const xmlNamespace = {
      prefix: "prefix",
      uri: "uri"
    };
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          Foo: {
            type: "timestamp",
            timestampFormat: "atom"
          },
          GetFooOutput: {
            type: "structure",
            payload: "foo",
            members: {
              foo: {
                shape: "Foo",
                xmlNamespace: xmlNamespace.uri
              },
              bar: {
                shape: "Foo",
                xmlNamespace
              },
              baz: { shape: "Foo" }
            }
          }
        }
      })
    );

    expect(
      api.operations.GetFoo.output.shape.members.foo.xmlNamespace
    ).toEqual({ uri: xmlNamespace.uri });
    expect(api.operations.GetFoo.output.shape.members.bar.xmlNamespace).toEqual(
      xmlNamespace
    );
    expect(
      api.operations.GetFoo.output.shape.members.baz.xmlNamespace
    ).toBeUndefined();
  });

  it("should use a reference to a list member inside a list", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          Foo: {
            type: "list",
            member: { shape: "FooMember" }
          },
          FooMember: { type: "string" },
          GetFooOutput: {
            type: "structure",
            members: {
              foo: { shape: "Foo" }
            }
          }
        }
      })
    );

    const { shape } = (api.operations.GetFoo.output.shape.members.foo
      .shape as TreeModelList).member;
    expect(shape).toBe(api.shapes[shape.name]);
  });

  it("should use a reference to map keys and values inside a map", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          Foo: {
            type: "map",
            key: { shape: "FooKey" },
            value: { shape: "FooValue" }
          },
          FooKey: { type: "string" },
          FooValue: { type: "string" },
          GetFooOutput: {
            type: "structure",
            members: {
              foo: { shape: "Foo" }
            }
          }
        }
      })
    );

    const map = api.operations.GetFoo.output.shape.members.foo
      .shape as TreeModelMap;
    expect(map.key.shape).toBe(api.shapes[map.key.shape.name]);
    expect(map.value.shape).toBe(api.shapes[map.value.shape.name]);
  });

  it("should use a reference to structure members inside a structure", () => {
    const shapes = deepCopy(minimalShapeMap);
    const GetFooOutput: Structure = {
      type: "structure",
      members: {}
    };
    Object.keys(minimalShapeMap).forEach(shapeName => {
      shapes[shapeName].sensitive = true;
      GetFooOutput.members[shapeName] = { shape: shapeName };
    });
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          ...shapes,
          GetFooOutput
        }
      })
    );

    const { members } = api.operations.GetFoo.output.shape;
    for (let memberName of Object.keys(members)) {
      const member = members[memberName];
      expect(member.shape).toBe(api.shapes[member.shape.name]);
    }
  });

  it("should preserve documentation traits on structure members", () => {
    const api = fromModelJson(
      JSON.stringify({
        metadata: minimalValidServiceMetadata,
        operations: {
          GetFoo: {
            name: "GetFoo",
            http: {
              method: "GET",
              requestUri: ""
            },
            output: { shape: "GetFooOutput" }
          }
        },
        shapes: {
          Foo: {
            type: "timestamp",
            timestampFormat: "atom"
          },
          GetFooOutput: {
            type: "structure",
            payload: "foo",
            members: {
              foo: {
                shape: "Foo",
                documentation: "foo member of GetFooOutput"
              }
            }
          }
        }
      })
    );

    expect(
      api.operations.GetFoo.output.shape.members.foo.documentation
    ).toEqual("foo member of GetFooOutput");
  });
});
