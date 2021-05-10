import {data} from './data.js'
let input = data
input= input.trim()
let array = input.split('\n')
//console.table(array)

const getRules = (string) => {
  let tiret = string.search('-');
  let deuxPoints = string.search(':');
  let Rules = {
    min : string.substr(0,(tiret)),
    max : string.slice((tiret+1),(deuxPoints-2)),
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
  let counter = 0;
  for(let l of pwd){
    l===rules.key ? counter++ : counter
  } 
  //console.log(counter)
  if(counter >= rules.min && counter <= rules.max){
    return true
  } else {
    return false
  }
}

const getNumber = (array) => {
  let counter = 0
  for(let trying of array){
    if(test(trying)) counter++;
  }
  return counter
}
/* const test1 = getRules(array[989])
const pwd = getPwd(array[989])
console.log('test', test1)
console.log('pwd', `__${pwd}__`) */

console.log(test(array[989]))

console.log(getNumber(array))