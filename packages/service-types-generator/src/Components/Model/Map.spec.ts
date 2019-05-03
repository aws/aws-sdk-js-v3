import { Map } from "./Map";

describe("Map", () => {
  it("should emit a basic Map", () => {
    const map = new Map({
      type: "map",
      name: "MyMap",
      documentation: "MyMap",
      key: {
        shape: {
          type: "string",
          name: "string",
          documentation: "string"
        }
      },
      value: {
        shape: {
          type: "boolean",
          name: "boolean",
          documentation: "boolean"
        }
      }
    });

    expect(map.toString()).toEqual(
      `
import {Map as _Map_} from '@aws-sdk/types';

export const MyMap: _Map_ = {
  type: 'map',
  key: {
    shape: {
      type: 'string',
    },
  },
  value: {
    shape: {
      type: 'boolean',
    },
  },
};
        `.trim()
    );
  });

  it("should include flattened trait in emitted value", () => {
    const map = new Map({
      type: "map",
      name: "MyMap",
      documentation: "MyMap",
      flattened: true,
      key: {
        shape: {
          type: "string",
          name: "string",
          documentation: "string"
        }
      },
      value: {
        shape: {
          type: "boolean",
          name: "boolean",
          documentation: "boolean"
        }
      }
    });

    expect(map.toString()).toEqual(
      `
import {Map as _Map_} from '@aws-sdk/types';

export const MyMap: _Map_ = {
  type: 'map',
  flattened: true,
  key: {
    shape: {
      type: 'string',
    },
  },
  value: {
    shape: {
      type: 'boolean',
    },
  },
};
        `.trim()
    );
  });

  it("should include sensitive trait in emitted value", () => {
    const map = new Map({
      type: "map",
      name: "MyMap",
      documentation: "MyMap",
      sensitive: true,
      key: {
        shape: {
          type: "string",
          name: "string",
          documentation: "string"
        }
      },
      value: {
        shape: {
          type: "boolean",
          name: "boolean",
          documentation: "boolean"
        }
      }
    });

    expect(map.toString()).toEqual(
      `
import {Map as _Map_} from '@aws-sdk/types';

export const MyMap: _Map_ = {
  type: 'map',
  sensitive: true,
  key: {
    shape: {
      type: 'string',
    },
  },
  value: {
    shape: {
      type: 'boolean',
    },
  },
};
        `.trim()
    );
  });

  it("should import complex shapes used as values", () => {
    const map = new Map({
      type: "map",
      name: "MyMap",
      documentation: "MyMap",
      key: {
        shape: {
          type: "string",
          name: "string",
          documentation: "string"
        }
      },
      value: {
        shape: {
          type: "structure",
          name: "structure",
          documentation: "structure",
          required: [],
          members: {}
        }
      }
    });

    expect(map.toString()).toEqual(
      `
import {Map as _Map_} from '@aws-sdk/types';
import {structure} from './structure';

export const MyMap: _Map_ = {
  type: 'map',
  key: {
    shape: {
      type: 'string',
    },
  },
  value: {
    shape: structure,
  },
};
        `.trim()
    );
  });

  it("should import complex shapes used as keys", () => {
    const map = new Map({
      type: "map",
      name: "MyMap",
      documentation: "MyMap",
      key: {
        shape: {
          type: "structure",
          name: "structure",
          documentation: "structure",
          required: [],
          members: {}
        }
      },
      value: {
        shape: {
          type: "boolean",
          name: "boolean",
          documentation: "boolean"
        }
      }
    });

    expect(map.toString()).toEqual(
      `
import {Map as _Map_} from '@aws-sdk/types';
import {structure} from './structure';

export const MyMap: _Map_ = {
  type: 'map',
  key: {
    shape: structure,
  },
  value: {
    shape: {
      type: 'boolean',
    },
  },
};
        `.trim()
    );
  });

  it("should use getter for circular dependencies", () => {
    const circularDependencies = { MyMap: new Set(["Sub"]) };
    const map = new Map(
      {
        type: "map",
        name: "MyMap",
        documentation: "MyMap",
        value: {
          shape: {
            name: "Sub",
            type: "structure",
            documentation: "structure",
            required: [],
            members: {}
          }
        },
        key: {
          shape: {
            type: "string",
            name: "string",
            documentation: "string"
          }
        }
      },
      circularDependencies
    );
    expect(map.toString()).toEqual(
      `
import {Map as _Map_, Member as _Member_} from '@aws-sdk/types';
import {Sub} from './Sub';

export const MyMap: _Map_ = {
  type: 'map',
  key: {
    shape: {
      type: 'string',
    },
  },
  get value(): _Member_ {
    Object.defineProperty(MyMap, 'value', {value: {
      shape: Sub,
    }});
    return {
      shape: Sub,
    };
  },
};       
        `.trim()
    );
  });
});
