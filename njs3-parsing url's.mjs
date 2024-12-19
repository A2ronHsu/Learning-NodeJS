import url from 'url';

const adr =  'https://www.freecodecamp.org/email-sign-up/?messages=success%5B0%5D%3Dflash.signin-success';
const q = url.parse(adr,false);

console.log(q);
console.log(`
   ${q.host}
   ${q.pathname}
   ${q.search}
   `)