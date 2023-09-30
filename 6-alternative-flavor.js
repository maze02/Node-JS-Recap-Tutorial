// const items = ['item1', 'item2']

module.exports.items = ['item', 'item2']
const person = {
  name: 'sergi',
}

/**
 * Given that every time you console.log the module
 * the module.exports is printed as an object,
 * therefore you can declare attributes to the object directly
 */
module.exports.singlePerson = person

/**
 * exported output will be
 * {items:['item1','item2'], singlePerson:{name:'bob'}}
 */
