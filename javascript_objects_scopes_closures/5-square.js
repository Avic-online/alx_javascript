#!/usr/bin/node
/**
 * program to declare a class square
 * the class square is to inherit from the class rectangle
 */

const Rectangle = require('./4-rectangle');

module.exports = class Square extends Rectangle {
    constructor (size) {
        super(size, size);
    };
};