define(["../Gardener"], function(Gardener) {

    describe("Gardener", function() {
        
        beforeEach(function(){
            this.addMatchers({
                toBeAPlant: function(){
                    var actual = this.actual;
                    // our custom matcher doesn't take an expected argument
                    // var expected = this.expected;
                    // our custom matcher doesn't support the .not() prefix matcher
                    // var notText = this.isNot ? " not" : "";
                    var validPlant = Gardener.Plant.isPrototypeOf(actual);
                    var noOwnGrowImpl = !actual.hasOwnProperty("grow");
                    
                    this.message = function () {
                        if (!validPlant){
                            return "Expected " + actual + " to be a plant";
                        }
                        if (!noOwnGrowImpl){
                            return "Species " + actual + " has own grow implementation? Use prototypal inheritance!";
                        }
                    }
                    
                    return validPlant && noOwnGrowImpl;
                }
            });
        });
        
        it("sowing seeds give me a new living plant", function() {
            var plant = Object.create(seed).sow();
    		it("plant can't be empty or undefined", function(){
        	    expect(plant).toBeTruthy();
        	    expect(plant).toBeAPlant();
    		})
	    });
	
    	it("sowing seeds and growing plants give me a new second generation batch of seeds, based upon the first", function() {
    		var seed1 = Object.create(seed);
    		var plant1 = seed1.sow();
    		var newSeed = plant1.grow();
    		
    		expect(newSeed.generation).toBe(2);
    		expect(seed1.isPrototypeOf(newSeed)).toBeTruthy();
    	});
    
    	it("sowing seeds and growing plants for over 10 generations", function() {
    		var aSeed = Object.create(seed);
    		for(var i = 1; i <= 10; i++) {
    			var newSeed = aSeed.sow().grow();
                expect(i + 1).toEqual(newSeed.generation);
    			aSeed = newSeed;
    		}
    	});
        
        it("sowing seeds of two different species result in two different plants", function() {
    		var plant1 = Object.create(seed).sow();
    		var plant2 = Object.create(seed).sow();
    		
            //"plant1 is the same as plant2 for another given seed? We live in a strange world indeed!"
    		expect(plant1).not.toEqual(plant2);
    	});
	});
  
    return {
        name : "GardenerSpec"
    }
});