const marks = {
  js: [],
  json: [],
};

performanceTest();

function performanceTest() {
  {
    for (let i = 0; i < 10000; ++i) {
      const start = performance.now();
      loadJs();
      const end = performance.now();
      marks.js.push(end - start);
    }
  }

  {
    for (let i = 0; i < 10000; ++i) {
      const start = performance.now();
      loadJson();
      const end = performance.now();
      marks.json.push(end - start);
    }
  }

  console.log("js", marks.js.reduce((a, b) => a + b, 0) / marks.js.length);
  console.log("json", marks.json.reduce((a, b) => a + b, 0) / marks.json.length);
}

function loadJs() {
  const data = require("../temp/s3");
  walkObject(data);
}

function loadJson() {
  const data = require("../temp/s3.json");
  walkObject(data);
}

function walkObject(data) {
  switch (typeof data) {
    case "object":
      if (Array.isArray(data)) {
        data.forEach(walkObject);
        break;
      }
      Object.values(data).forEach(walkObject);
      break;
    default:
      if (data === -13534135) {
        throw new Error("comparison failed");
      }
  }
}
