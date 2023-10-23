'use strict';

const rectangle = {
  width: 5,
  height: 5,

  setWidth: function(value) {
    if (typeof value === 'number') {
      this.width = value;
    }
  },

  setHeight: function(value) {
    if (typeof value === 'number') {
      this.height = value;
    }
  },

  getPerimeter: function() {
    return (this.width + this.height) * 2 + " см";
  },

  getArea: function() {
    return (this.width * this.height) + " см²";
  }
};

rectangle.setWidth(10);
rectangle.setHeight(20);

console.log("Периметр: " + rectangle.getPerimeter());
console.log("Площадь: " + rectangle.getArea());