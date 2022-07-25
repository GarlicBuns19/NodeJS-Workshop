console.log('Node is working lets go')
console.log('I am learning node')

var time = 0

setTimeout(function(){
    console.log('hello 2000')
},2000);


// Not going to end in cmd ctrl + c
setInterval(function(){
    time += 2
    console.log(time + ' hello 2000')
},2000);


// Going to end it by variable
var timer = setInterval(function(){
    time += 2
    console.log(time + ' hello 2000');
    if(time > 5){
        // Do this instead of ctrl + c
        clearInterval(timer)
    }
},2000);