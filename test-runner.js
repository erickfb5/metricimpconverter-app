const analyser = require("./assertion-analyser");
const EventEmitter = require("events").EventEmitter;

const Mocha = require("mocha");
const fs = require("fs");
const path = require("path");

const mocha = new Mocha();
const testDir = "./tests";

// Add each .js file to the mocha instance
fs.readdirSync(testDir)
  .filter((file) => file.substr(-3) === ".js") // Only keep the .js files
  .forEach((file) => mocha.addFile(path.join(testDir, file)));

const emitter = new EventEmitter();
emitter.run = () => {
  const tests = [];
  let context = "";
  const separator = " -> ";
  // Run the tests.
  try {
    const runner = mocha
      .ui("tdd")
      .run()
      .on("test end", (test) => {
        let body = test.body.replace(/\/\/.*\n|\/\*.*\*\//g, ""); // remove comments
        body = body.replace(/\s+/g, " "); // collapse spaces
        let obj = {
          title: test.title,
          context: context.slice(0, -separator.length),
          state: test.state,
          // body: body,
          assertions: analyser(body),
        };
        tests.push(obj);
      })
      .on("end", () => {
        emitter.report = tests;
        emitter.emit("done", tests);
      })
      .on("suite", (s) => (context += s.title + separator))
      .on("suite end",(s) =>(context = context.slice(0, -(s.title.length + separator.length)))
      );
  } catch (e) {
    throw e;
  }
};

module.exports = emitter;