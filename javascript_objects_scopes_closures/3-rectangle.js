#!/usr/bin/node
/* a class that takes the width and height
  *of a rectangle and initializes its instance, it has a conditional statement
  *with an instance method called print() that prints X
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
};
