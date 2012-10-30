define(["../MovieTicket", "../Cinema"], function(MovieTicket, Cinema) {

    describe("MovieTicket", function() {
        
        it("for 1 person should be 7 euro", function() {
            var ticket = MovieTicket;
            ticket.amountOfPeople = 1;
            expect(ticket.movieType).toBe(Cinema.movieTypeNormal);
            expect(ticket.price()).toBe(7);
            expect(ticket.cinemaName).toBe("Kinepolis");
        });
    
        it("of normal movie for 2 persons is 14 euro", function() {
            var ticket = MovieTicket;
            ticket.amountOfPeople = 2;
            expect(ticket.movieType).toBe(Cinema.movieTypeNormal);
            expect(ticket.price()).toBe(14);
            expect(ticket.cinemaName).toBe("Kinepolis");
        });
        
        it("With 20 people or more you'll get a 15% reduction", function() {
            var ticket = MovieTicket;
            ticket.amountOfPeople = 20;
            expect(ticket.movieType).toBe(Cinema.movieTypeNormal);
            expect(ticket.price()).toBe(119);
            expect(ticket.cinemaName).toBe("Kinepolis");
        });
        
        it("price of a featured movie is 8 euro", function() {
            var ticket = MovieTicket;
            ticket.amountOfPeople = 1;
            ticket.movieType = Cinema.movieTypeFeatured;
            expect(ticket.price()).toBe(8);
            expect(ticket.cinemaName).toBe("Kinepolis");
        });
        
        it("price of a 3D movie is 11 euro", function() {
            var ticket = MovieTicket;
            ticket.amountOfPeople = 1;
            ticket.movieType = Cinema.movieType3D;
            expect(ticket.price()).toBe(11);
            expect(ticket.cinemaName).toBe("Kinepolis");
        });
        
        it("price of a 3D movie for 2 persons is 22 euro", function() {
            var ticket = MovieTicket;
            ticket.amountOfPeople = 2;
            ticket.movieType = Cinema.movieType3D
            expect(ticket.price()).toBe(22);
            expect(ticket.cinemaName).toBe("Kinepolis");
        });
        
    });
  
    return {
        name : "MovieTicketSpec"
      }
});