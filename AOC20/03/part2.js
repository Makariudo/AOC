import {data} from './data.js'
let input = data
input= input.trim()
let array = input.split('\n')
//console.table(array)

let x=0;
let y=0;

const height  = array.length;
console.log('height', height)
const width = (array[0].length);
console.log('width', width)

const testIfTree = (letter) => {
  return letter === '#'
}

let results = []

function run(slopeX, slopeY) {
 let count = 0;
 y=0;
  while(y < height-1){
    console.log('x:',x,'y:',y)
    const line = array[y];
    console.log('line', line);
    const sign = line[x];
    console.log('sign', sign);
    testIfTree(sign) ? count++ : null;
    x = (x+slopeX) % width;
    y = y+slopeY;
  }
  console.log('sort du while et count vaut', count);
  results.push(count);
}

let slopes = [{x: 1, y: 1},{x: 3, y: 1},{x: 5, y: 1},{x: 7, y: 1}, {x: 1, y: 2}]

function calculate () {
  for(let pass of slopes) {
  console.log('pass', pass.x, pass.y)
  run(pass.x, pass.y)
}
}

calculate();

console.log('results', results)

function multiply () {
var multiply = results.reduce((acc, val) => acc * val, 1);
return multiply
}
console.log(multiply())