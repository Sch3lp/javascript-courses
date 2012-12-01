define(["../Calculator"], function(Calculator) {

    describe("Calculate", function() {
        
        it("can add numbers", function() {
            expect(Calculator.calculate("3 + 4")).toBe(7);
            expect(Calculator.calculate("21 + 1")).toBe(22);
        });
    
        it("can multiply with star", function() {
            expect(Calculator.calculate("50 * 10")).toBe(500);
            expect(Calculator.calculate("5 * 6")).toBe(30);
        });
        
        it("can multiply with cross", function() {
            expect(Calculator.calculate("50 x 10")).toBe(500);
            expect(Calculator.calculate("5 x 6")).toBe(30);
        });
        
        it("returns the number when no calculations needed", function() {
            expect(Calculator.calculate("4567")).toBe(4567);
        });
        
        it("did not cheat using eval(), I swear!", function() {
            expect(Calculator.calculate.toString().indexOf("eval(") < 0).toBeTruthy();
        });
        
        it("did not pretend to be smart using Function(), I swear!", function() {
            expect(Calculator.calculate.toString().indexOf("Function(") < 0).toBeTruthy();
        });
    });
  
    return {
        name : "CalculateSpec"
      }
});