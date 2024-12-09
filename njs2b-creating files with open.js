const fs = require('fs');

fs.open('demofile.html','w', (err,file)=>{
   if (err) throw err;
   console.log('saved!');
})