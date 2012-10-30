define(['./Cinema'], function(Cinema){
    getPrice = function () {
        //var unitPrice = 0;
        //if (this.movieType === Cinema.movieTypeNormal){
        //    unitPrice = 7;
        //}
        //if (this.movieType === Cinema.movieTypeFeatured){
        //    unitPrice = 8;
        //}
        //if (this.movieType === Cinema.movieType3D){
        //    unitPrice = 11;
        //}
        //
        //var price = unitPrice * this.amountOfPeople;
        //if (this.amountOfPeople == 20){
        //    price = price * 0.85;
        //}
        return 0;
    };

  return {
    amountOfPeople: 0,
    price: this.getPrice,
    movieType: Cinema.movieTypeNormal
  }
});