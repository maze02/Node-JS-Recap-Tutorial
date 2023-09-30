//variable os allows you access to all the modules methods
const os = require('os')

//info about current user

const user = os.userInfo()
console.log(user)

/**consoles the below
 * 
  uid: 345,
  gid: 435,
  username: 'X',
  homedir: 'C:\\Users\\X',
  shell: null
 */

//method returns the system uptime in seconds - how long the system has been running
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)
