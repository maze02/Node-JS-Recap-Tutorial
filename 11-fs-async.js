const { readFile, writeFile } = require('fs')
//async allows the server to serve the required functionality to a user
//and the serve functionality to another user, while the functionality is being used
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log('failure', err)
    return
  }

  const first = result
  console.log('first successful', result)

  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log('failure', err)
      return
    }
    const second = result
    console.log('second successful', result)
    console.log('async -done with this task', result)
    writeFile(
      './content/result-async.txt',
      `Here is the result: ${first},  ${second}`,
      (err, result) => {
        if (err) {
          console.log('failure', err)
          return
        }
        console.log('total success  of writing task', result)
      }
    )
  })
})

console.log('starting next task')
