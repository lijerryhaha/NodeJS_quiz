const fs = require('fs');
const process = require('process');

//方式一 readFile
//读取文件
let data = fs.readFileSync('./assets/2020329621189_李杰_课程设计录屏.mp4');
//写入文件
fs.writeFileSync('./assets/2020329621189_李杰_课程设计录屏copy1.mp4',data);
console.log(process.memoryUsage());//rss=116121600 约等于110.7MB

//方式二 流式读取
// //创建读取流对象
// const rs = fs.createReadStream('././assets/2020329621189_李杰_课程设计录屏.mp4');
// //创建写入流对象
// const ws = fs.createWriteStream('./assets/2020329621189_李杰_课程设计录屏copy2.mp4');
// //绑定data事件
// rs.on('data',chunk =>{
//     ws.write(chunk);
// });

// rs.on('end',()=>{
//     console.log(process.memoryUsage());//rss=28864512 约等于27.5MB
// });
