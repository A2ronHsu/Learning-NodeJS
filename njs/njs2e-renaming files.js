const fs = require('fs');

fs.rename('demofile1.html', 'demofilerenamed.html', (err)=>{
   if (err) throw err;
   console.log('File renamed!');
})