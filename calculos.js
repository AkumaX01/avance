module.exports = {
  area: function (width) {
  // return Math.pow(width, 2);
    return ((Math.sqrt(3)*Math.pow(width,2)))/4;
  },
  perimetro: function (width) {
    return width * 3;
  },
};
