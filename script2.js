const fs = require('fs')



const readStream = fs.createReadStream('./docs/text.txt')
const writeStream = fs.createWriteStream('./docs/text2.txt')

let a = 1;

readStream.on('data', (chunk) => {
    writeStream.write(`part №${a}\n`) 
    writeStream.write(chunk+'\n')
    a++;
})