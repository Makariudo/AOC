let results  = [ 86, 66, 75, 79, 48 ];
let init = 1;
let  multiply = results.reduce((acc, val) => acc * val, init);

console.log(multiply)