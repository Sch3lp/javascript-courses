$(document).ready(function() {

	test("can add numbers", function() {
	  equal(calculate("3 + 4"), 7);
	  equal(calculate("21 + 1"), 22);
	});
	 
	test("can multiply with star", function() {
	  equal(calculate("50 * 10"), 500);
	  equal(calculate("5 * 6"), 30);
	});
	 
	test("can multiply with cross", function() {
	  equal(calculate("50 x 10"), 500);
	  equal(calculate("5 x 6"), 30);
	});

	test("return the number when no calculations needed", function() {
		equal(calculate("4567"), 4567);
	});
	
	test("I did not cheat using eval(), I swear!", function() {
		ok(calculate.toString().indexOf("eval(") < 0);
	});
	
	test("I did not pretend to be smart using Function(), I swear!", function() {
		ok(calculate.toString().indexOf("Function(") < 0);
	});
});
