#!/usr/bin/node
// code to increment integer value

let myObject = {
    type: 'object',
    value: 12
};
console.log(myObject);

//   myObject={type:'object', value:89};

myObject.incr = function(){
    this.value++;
}

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);