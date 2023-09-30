//fs module allows you to interact with the file system
//Different ways to access the module - i.e. ddestructuring the methods

/*
const { readFileSync } = require('fs')
const fs = require('fs')
fs.readFileSync*/

/**These methods allow you to create files and read files */
const { readFileSync, writeFileSync } = require('fs')
console.log('sync -Start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)
//logs this- appears to extract it and asign to the variables>
// Hello this is the first text file  Hello this is the second text file

//this creates a filee with the content in the director mentioned below and the name assigned to file

/* This generates file: 
And overwrites everything in the file every time the method is invoked

 writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
)
 */

/**If you dont want to overwrite things in the append,
 * you add the options object with 'flag: a'
 * to append the new info everytime the method is invoked, instead of overwriting it
 */
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with the task')
console.log('starting the next one')

/**Problem with sync node block code
 * is that if it is doing the task above and it has many users, it will not be able to serve other users until the first task or both tasks are done and that is a problem
 */
