#!/usr/bin/node
/* a class that takes the width and height
  *of a rectangle and initializes its instance, it has a conditional statement
  *with an instance method called print() that prints X
  *with an instance method rotate() that exchange width and height of rectangle
  *with an instance method double that multiplies the width and height of rectangle
*/
module.exports = class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            [this.width, this.height] = [w, h];
        };
    };
    print () {
        for (let count = 0; count < this.height; count += 1)
        console.log("X".repeat(this.width));
    };
    rotate() {
        [this.width, this.height] = [this.height, this.width] 
    };
    double() {
        [this.width, this.height] = [this.width * 2, this.height * 2]
    };
};