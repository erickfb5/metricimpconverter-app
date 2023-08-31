const chai = require("chai");
const assert = chai.assert;
const expect = require("chai").expect;

const ConvertHandler = require("../controllers/convertHandler.js");
let convertHandler = new ConvertHandler();

suite("Unit Tests", () => {
  // Test 1: convertHandler should correctly read a whole number input.
  test("convertHandler should correctly read a whole number input", () => {
    const input = "42kg";
    const expected = 42;
    const result = convertHandler.getNum(input);
    assert.equal(result, expected);
  });

  // Test 2: convertHandler should correctly read a decimal number input.
  test("convertHandler should correctly read a decimal number input", () => {
    const input = "3.5kg";
    const expected = 3.5;
    const result = convertHandler.getNum(input);
    assert.equal(result, expected);
  });

  // Test 3: convertHandler should correctly read a fractional input.
  test("convertHandler should correctly read a fractional input", () => {
    const input = "1/2kg";
    const expected = 0.5;
    const result = convertHandler.getNum(input);
    assert.equal(result, expected);
  });

  // Test 4: convertHandler should correctly read a fractional input with a decimal.
  test("convertHandler should correctly read a fractional input with a decimal", () => {
    const input = "1.5/2kg";
    const expected = 0.75;
    const result = convertHandler.getNum(input);
    assert.equal(result, expected);
  });

  // Test 5: convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).
  test("convertHandler should correctly return an error on a double-fraction", () => {
    const input = "3/2/3kg";
    const expected = null;
    const result = convertHandler.getNum(input);
    assert.isNull(result);
  });

  // Test 6: convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.
  test("convertHandler should correctly default to a numerical input of 1", () => {
    const input = "kg";
    const expected = 1;
    const result = convertHandler.getNum(input);
    assert.equal(result, expected);
  });

  // Test 7: convertHandler should correctly read each valid input unit.
  test("convertHandler should correctly read each valid input unit", () => {
    const validUnits = ["gal", "L", "mi", "km", "lbs", "kg"];
    validUnits.forEach((unit) => {
      const input = `42${unit}`;
      const result = convertHandler.getUnit(input);
      assert.equal(result, unit);
    });
  });

  // Test 8: convertHandler should correctly return an error for an invalid input unit.
  test("convertHandler should return an error for an invalid input unit", () => {
    const input = "42invalidunit";
    const result = convertHandler.getUnit(input);
    assert.isNull(result);
  });

  // Test 9: convertHandler should return the correct return unit for each valid input unit.
  test("convertHandler should return the correct return unit for each valid input unit", () => {
    const validUnits = ["gal", "L", "mi", "km", "lbs", "kg"];
    validUnits.forEach((unit) => {
      const result = convertHandler.getReturnUnit(unit);
      assert.isNotNull(result);
    });
  });

  // Test 10: convertHandler should correctly return the spelled-out string unit for each valid input unit.
  test("convertHandler should correctly return the spelled-out string unit for each valid input unit", () => {
    const validUnits = ["gal", "L", "mi", "km", "lbs", "kg"];
    validUnits.forEach((unit) => {
      const result = convertHandler.spellOutUnit(unit);
      assert.isNotNull(result);
    });
  });

  // Test 11: convertHandler should correctly convert gal to L.
  test("convertHandler should correctly convert gal to L", () => {
    const inputUnit = "gal";
    const expectedUnit = "L";
    const result = convertHandler.getReturnUnit(inputUnit);
    assert.equal(result, expectedUnit);
  });

  // Test 12: convertHandler should correctly convert L to gal.
  test("convertHandler should correctly convert L to gal", () => {
    const inputUnit = "L";
    const expectedUnit = "gal";
    const result = convertHandler.getReturnUnit(inputUnit);
    assert.equal(result, expectedUnit);
  });

  // Test 13: convertHandler should correctly convert mi to km.
  test("convertHandler should correctly convert mi to km", () => {
    const inputUnit = "mi";
    const expectedUnit = "km";
    const result = convertHandler.getReturnUnit(inputUnit);
    assert.equal(result, expectedUnit);
  });

  // Test 14: convertHandler should correctly convert km to mi.
  test("convertHandler should correctly convert km to mi", () => {
    const inputUnit = "km";
    const expectedUnit = "mi";
    const result = convertHandler.getReturnUnit(inputUnit);
    assert.equal(result, expectedUnit);
  });

  // Test 15: convertHandler should correctly convert lbs to kg.
  test("convertHandler should correctly convert lbs to kg", () => {
    const inputUnit = "lbs";
    const expectedUnit = "kg";
    const result = convertHandler.getReturnUnit(inputUnit);
    assert.equal(result, expectedUnit);
  });

  // Test 16: convertHandler should correctly convert kg to lbs.
  test("convertHandler should correctly convert kg to lbs", () => {
    const inputUnit = "kg";
    const expectedUnit = "lbs";
    const result = convertHandler.getReturnUnit(inputUnit);
    assert.equal(result, expectedUnit);
  });
});