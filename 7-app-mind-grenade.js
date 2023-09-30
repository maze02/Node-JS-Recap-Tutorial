// CommonJS, every file is module (by default)
//Modules/Encapsulated Code(only share minimum)
/*
const names = require('./4-names')
const sayHi = require('./5-utils')

const data = require('./6-alternative-flavor')
sayHi('susan')
sayHi(names.meri)
sayHi(names.sam)
console.log(data)
*/

/*without exporting and declaring as a variable and then invoking it will run the code if there is code invoked in the other module

You may get things in files to do complex things
and then simply require them
*/
require('./7-mind-grenade')
