"use strict";

const cors = require("cors");
const fs = require("fs");
const runner = require("../test-runner");

module.exports = (app) => {
  app.route("/_api/server.js").get((req, res, next) => {
    console.log("requested");
    fs.readFile(__dirname + "/server.js", (err, data) => err ? next(err) : res.send(data.toString()));
  });

  app.route("/_api/routes/api.js").get((req, res, next) => {
    console.log("requested");
    fs.readFile(__dirname + "/routes/api.js", (err, data) => err ? next(err) : res.type("txt").send(data.toString()));
  });

  app.route("/_api/controllers/convertHandler.js").get((req, res, next) => {
    console.log("requested");
    fs.readFile(__dirname + "/controllers/convertHandler.js", (err, data) => (err) ? next(err) : res.type("txt").send(data.toString()));
  });

  app.get(
    "/_api/get-tests",
    cors(),
    (req, res, next) => {
      console.log("requested");
      if (process.env.NODE_ENV === "test") return next();
      res.json({ status: "unavailable" });
    },
    (req, res, next) =>
      !runner.report
        ? next()
        : res.json(testFilter(runner.report, req.query.type, req.query.n)),
    (req, res) => runner.on("done", (report) => process.nextTick(() => res.json(testFilter(runner.report, req.query.type, req.query.n))))
  );

  app.get("/_api/app-info", (req, res) => {
    let hs = Object.keys(res._headers).filter(
      (h) => !h.match(/^access-control-\w+/)
    );
    let hObj = {};
    hs.forEach((h) => (hObj[h] = res._headers[h]));
    delete res._headers["strict-transport-security"];
    res.json({ headers: hObj });
  });
};

const testFilter = (tests, type, n) => {
  let out;
  switch (type) {
    case "unit":
      out = tests.filter((t) => t.context.match("Unit Tests"));
      break;
    case "functional":
      out = tests.filter(
        (t) => t.context.match("Functional Tests") && !t.title.match("#example")
      );
      break;
    default:
      out = tests;
  }
  return n !== undefined ? out[n] || out : out;
};