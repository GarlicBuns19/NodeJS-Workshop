// normal function statement
function sayhi(){
    console.log('hi')
}
sayhi();

// function expression
var sayBye = function(){
    console.log('Bye')
}
sayBye();

// Calling a function inside a function
function callFunction(fun){
    fun();
}
callFunction(sayBye)