  "use strict";

  // const expect = require("chai").expect;
  const ConvertHandler = require("../controllers/convertHandler.js");

  module.exports = (app) => {
    let convertHandler = new ConvertHandler();

    app.route("/api/convert").get((req, res) => {
      const input = req.query.input;
      const initNum = convertHandler.getNum(input);
      const initUnit = convertHandler.getUnit(input);

      // Now you can use the methods of ConvertHandler to process the input
      // and generate the response data.
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