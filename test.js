var assert = require("assert");
var Calculate = require("./factorial.js");

describe("Calculate", () => {
  describe(".factorial", () => {
    // Test block one
    it("returns correct value of 5!", () => {
      //setup
      const inputNumber = 5;
      const expectedResult = 120;

      //execute
      const result = Calculate.factorial(inputNumber);

      //verify
      assert.equal(result, expectedResult);
    });

    // Test block two
    it("returns correct value of 3!", () => {
      //setup
      const inputNumber = 3;
      const expectedResult = 6;

      //execute
      const result = Calculate.factorial(inputNumber);

      //verify
      assert.equal(result, expectedResult);
    });

     // Test block Three
     it("returns correct value of 0!", () => {
      //setup
      const inputNumber = 0;
      const expectedResult = 1;

      //execute
      const result = Calculate.factorial(inputNumber);

      //verify
      assert.equal(result, expectedResult);
    });
  });
});

// 5! = 5*4*3*2*1 = 120
// 3! = 3*2*1 = 6
