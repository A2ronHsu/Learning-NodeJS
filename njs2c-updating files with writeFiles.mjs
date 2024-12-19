import fs from 'fs';

const text = `
<html>
<head>
</head>
<body>
   <h1>This is a demo file</h1>
   <p>Using the fs module we can read files using the fs.readFiles() method</p>
</body>
</html>
<!-- replaced from njs2c-->
`;

fs.writeFile('demofile1.html', text, (err)=>{
   if (err) throw err;
   console.log('Replaced');
})