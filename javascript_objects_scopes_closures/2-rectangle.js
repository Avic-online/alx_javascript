#!/usr/bin/node
// a class that takes the width and height
// of a rectangle and initializes its instance, it has a conditional statement

module.exports = class Rectangle {
    constructor(w, h) {
        if (w==0 || !Number.isInteger(w) || h==0 || !Number.isInteger(h)){
            return{};
        };
        this.width = w;
        this.height = h;
    };
};