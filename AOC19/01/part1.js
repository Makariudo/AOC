import {data} from './data.js'
let input = data
input= input.trim()
let array = input.split('\n')
console.table(array)

let sum =  0;
const calculate = () => {
  for(let entries of array){
    sum += parseInt((entries/3-2),10)
  }
  return sum
}
console.log(calculate())
