define([''], function(){
    var Pixel = {
        red: 0,
        green: 0,
        blue: 0,
        alpha: 0,
        toGrayscale: function(){
            this.red = 2;
            this.green = 2;
            this.blue = 2;
            return this;
        }
    };
    create = function(r,g,b,a){
        var pixel = Object.create(Pixel);
        pixel.red = r;
        pixel.green = g;
        pixel.blue = b;
        pixel.alpha = a;
        return pixel;
    }
  return {
    create: create,
    Pixel: Pixel
  }
});