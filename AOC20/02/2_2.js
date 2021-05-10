import {data} from './data.js'
let input = data
input= input.trim()
let array = input.split('\n')
console.table(array)

const getRules = (string) => {
  let tiret = string.search('-');
  let deuxPoints = string.search(':');
  let Rules = {
    pos1 : string.substr(0,(tiret)),
    pos2 : string.slice((tiret+1),(deuxPoints-2)),
    key : string[deuxPoints-1]
  }
  return Rules
}


const getPwd = (string) => {
  let deuxPoints = string.search(':');
  return string.substr(deuxPoints+2)
}

const test = (string) => {
  const rules = getRules(string);
  const pwd = getPwd(string);
  
  console.log(pwd[rules.pos1])
  console.log(pwd[rules.pos2])

  console.log(rules.key)
    if((rules.key === pwd[rules.pos1-1] && rules.key !== pwd[rules.pos2-1])|| (rules.key !== pwd[rules.pos1-1] && rules.key === pwd[rules.pos2-1])){
      return true
    } else {
      return false
    }
  
 
 
}

const getNumber = (array) => {
  let counter = 0;
  for(let trying of array){
    if(test(trying)) counter++;
  }
  return counter
}
/* const test1 = getRules(array[989])
const pwd = getPwd(array[989])
console.log('test', test1)
console.log('pwd', `__${pwd}__`) */

console.log(test(array[996]))

console.log(getNumber(array))