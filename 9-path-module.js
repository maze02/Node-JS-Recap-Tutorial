const path = require('path')
console.log('path.sep: ', path.sep)

//generates a file path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log('filePath: ', filePath) //filePath:  \content\subfolder\test.txt

const base = path.basename(filePath)

console.log('base: ', base) //base:  test.txt

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

//absolute:  C:\Users\M\nodeJS_Tutorial_JohnSmilga\Section3NodeJS\content\subfolder\test.txt
console.log('absolute: ', absolute)
