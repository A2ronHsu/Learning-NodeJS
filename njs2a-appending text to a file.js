const fs = require('fs');

fs.appendFile('demofile1.html','<!--i just appended this text -->', (err)=>{
   if (err) throw err;
   console.log('text appended!');
})