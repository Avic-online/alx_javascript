#!/usr/bin/node
// a class that takes the width and height
// of a rectangle and initializes its instance

module.exports = class Rectangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    };

};

// const r1 = new Rectangle(2, 3);
// console.log(r1);
// console.log(r1.width);
// console.log(r1.height);

// const r2 = new Rectangle(2, -3);
// console.log(r2);
// console.log(r2.width);
// console.log(r2.height);

// const r3 = new Rectangle(2);
// console.log(r3);
// console.log(r3.width);
// console.log(r3.height);