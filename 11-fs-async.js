const{readFile,writeFile} = require('fs');

readFile('./content2/first.txt','utf8',(err,result)=>{
if(err){
    console.log(err);
    return;
}   
const first = result;
readFile('./content2/second.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const second = result;
    writeFile('./content2/show.txt',`this is first: ${first}, and this is second: ${second}`,(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        console.log(result);
    })
    })
})