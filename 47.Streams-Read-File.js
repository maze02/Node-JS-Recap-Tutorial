const { createReadStream } = require('fs')

// by default the size of the buffer is  64kb
// last buffer - remainder
// highWaterMark - control size
/* 
const stream = createReadStream(
'./content/big.txt',{ 
 highWaterMark: 90000, //size of the buffer
 encoding: 'utf8' 
  }
 ) 
 */
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt')

//reads data in chunks
//result here is actually chunk
stream.on('data', (result) => {
  console.log(`Received ${result.length} bytes of data`)
})

//error event
stream.on('error', (err) => console.log(err))
