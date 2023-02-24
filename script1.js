const fs = require('fs')



const readStream = fs.createReadStream('./docs/text.txt')
const writeStream = fs.createWriteStream('./docs/text1.txt')


readStream.on('data', (chunk) => {
    writeStream.write('*********************\n') 
    writeStream.write(chunk+'\n')
    
})