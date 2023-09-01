function ConvertHandler() {
  this.getNum = (input) => {
    // Split the input by looking for the index of the first character that marks the start of the unit
    const unitIndex = input.search(/[a-zA-Z]/);

    // If there's no unit, and number is valid, return number
    if (unitIndex === -1 && !isNaN(input)) return input;

    // Extract the numeric part of the input
    const numericInput = input.slice(0, unitIndex).trim();
    // If no number is entered, return 1;
    if (!numericInput) return 1;

    // Handle fractions by splitting the numerator and denominator
    const parts = numericInput.split("/");
    if (parts.length > 2) return null; // Invalid input with more than one '/'

    // Handle fractions by dividing the numerator and denominator
    if (parts.length === 2) {
      const numerator = +parts[0];
      const denominator = +parts[1];
      return isNaN(numerator) || isNaN(denominator) ? null : numerator / denominator;
    } else {
      // Handle whole numbers or decimals
      return isNaN(+numericInput) ? null : +numericInput;
    }
  };

  this.getUnit = (input) => {
    const validUnits = ["gal", "L", "mi", "km", "lbs", "kg"];
    const unit = input.slice(input.toLowerCase().search(/[a-zA-Z]/));
    const newUnit = unit.toLowerCase();

    return validUnits.includes(newUnit) ? newUnit : newUnit === "l" ? "L" : null;
  };

  this.getReturnUnit = (initUnit) => {
    switch (initUnit) {
      case "gal":
        return "L";
      case "L":
        return "gal";
      case "mi":
        return "km";
      case "km":
        return "mi";
      case "lbs":
        return "kg";
      case "kg":
        return "lbs";
      default:
        return null; // Invalid unit
    }
  };

  this.spellOutUnit = (unit) => {
    switch (unit) {
      case "gal":
        return "gallons";
      case "L":
        return "liters";
      case "mi":
        return "miles";
      case "km":
        return "kilometers";
      case "lbs":
        return "pounds";
      case "kg":
        return "kilograms";
      default:
        return null; // Invalid unit
    }
  };

  this.convert = (initNum, initUnit) => {
    const conversions = {
      gal: 3.78541,
      L: 1 / 3.78541,
      mi: 1.60934,
      km: 1 / 1.60934,
      lbs: 0.453592,
      kg: 1 / 0.453592,
    };
    return initNum === null || initUnit === null
      ? null
      : initNum * conversions[initUnit];
  };

  this.getString = (initNum, initUnit, returnNum, returnUnit) =>
    initNum === null || initUnit === null || returnNum === null ||returnUnit === null
    ? null
    : `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`;
}

module.exports = ConvertHandler;