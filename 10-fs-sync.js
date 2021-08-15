const{readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./content2/first.txt','UTF8');
const second = readFileSync('./content2/second.txt','utf8');
console.log(first,second);

writeFileSync('./content/third-sync.txt',`Here is the result: ${first}, ${second}`,{flag:'a'})
