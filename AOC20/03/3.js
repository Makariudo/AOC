import {data} from './data.js'
let input = data
input= input.trim()
let array = input.split('\n')
console.table(array)

let counter = 0;
let x=0;
let y=0;

const height  = array.length
console.log('height :',height)

const width = array[0].length
console.log('width', width)

const testIfTree = (letter) => {
  return letter === '#'
}

const runX = () => {
  switch (x) {
     case (28) :
       x=0
       break;
    case (29) :
      x=1;  
      break;
    case (30) :
      x=2;  
      break;

    default :
      x +=3
  }
}

function run(input) {
  
  while(y < height){
    console.log('x:',x,'y:',y)
    const line = input[y];
    console.log('line', line);
    const sign = line[x];
    console.log('sign', sign)
    testIfTree(sign) ? counter++ : counter
    runX();
    y++;
  }
}


/* for(let i=0; i <= 323; i++){
  runX()
console.log(x)
} */

run(array)
console.log(counter)
