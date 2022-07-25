// console.log('Node is working lets go')
// console.log(__dirname)
// console.log(__filename)
// const os = require('os');
// const path = require('path')
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));

module.exports.add = function add(a,b){
    console.log(a+b)
};
var six =6

module.exports.six = six

// module.exports = {
//     add:add,
//     six:six
// }