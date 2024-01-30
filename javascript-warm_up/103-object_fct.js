#!/usr/bin/node
// code to increment integer value

const myObject = {
    type: 'object',
    value: 12
};
console.log(myObject);

//   myObject={type:'object', value:89};

myObject.incr = function(value, theFunction){
    // myObject.value = 89;
    this.value++;
    this.theFunction;
}

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);