define(["../Cinema"], function(MovieTicket, Cinema) {

    describe("Cinema", function() {
        
        it("has name Kinepolis by default", function() {
            expect(Cinema.name).toBe("Kinepolis");
        });
    });
  
    return {
        name : "CinemaSpec"
      }
});