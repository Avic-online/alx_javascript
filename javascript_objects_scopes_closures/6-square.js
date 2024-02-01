#!/usr/bin/node
/**
 * program to declare a class square
 * the class square is to inherit from the class rectangle
 */


const Square5 = require('./5-square');

module.exports = class Square extends Square5 {
    charPrint(c) {
        if (c === undefined) {
            this.print();
        
        } 
        else {
            for (let count = 0; count < this.height; count += 1)
            console.log(c.repeat(this.width));
        }
    }
};