const file = require('fs');
const path = require('path');

file.readFile('./data.txt','utf8',(err,data) => {
    if(err)throw err;
    console.log(data)
})

file.witeFile(path.join(__dirname,'./data.txt'),
    'Example 3', err=> {
    
    }
)