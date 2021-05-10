import {data} from './data.js'
let input = data
input= input.trim()
let array = input.split('\n')
console.table(array)

let sum =  0;

const calculateModuleSum = (entry) => {
  let res = entry;
  let sum = 0;
  while(res>1){
    res = parseInt((res/3-2),10);
    console.log(res)
    if(res >= 0){
         sum += res
    }
  }
  console.log(sum)
  return sum

}

const calculate = () => {
  for(let entries of array){
   sum += calculateModuleSum(entries)
  }
  return sum
}

calculateModuleSum(100756)
console.log(calculate())
