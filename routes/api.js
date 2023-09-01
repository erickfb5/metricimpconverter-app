  "use strict";

  // const expect = require("chai").expect;
  const ConvertHandler = require("../controllers/convertHandler.js");

  module.exports = (app) => {
    const convertHandler = new ConvertHandler();

    app.route("/api/convert").get((req, res) => {
      const input = req.query.input;
      const initNum = convertHandler.getNum(input);
      const initUnit = convertHandler.getUnit(input);

      const returnNum = convertHandler.convert(initNum, initUnit);
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const string = convertHandler.getString( initNum, initUnit, returnNum, returnUnit);

      if (!initNum && !initUnit) return res.json("invalid number and unit");
      if (!initUnit) return res.json("invalid unit");
      if (!initNum) return res.json("invalid number");
      
      const response = { initNum, initUnit, returnNum: +returnNum.toFixed(5), returnUnit, string };
      res.json(response);
    });

    
  };