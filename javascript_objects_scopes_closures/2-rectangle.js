#!/usr/bin/node
// a class that takes the width and height
// of a rectangle and initializes its instance, it has a conditional statement

module.exports = class Rectangle {
    constructor(w, h) {
        // if (w==0 || !Number.isInteger(w) || h==0 || !Number.isInteger(h)){
        //     return{};
        // };
        if (w > 0 && h > 0) { [this.width, this.height] = [w, h];}
        // this.width = w;
        // this.height = h;
    };
};