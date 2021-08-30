//spread operator

let array1 = [0, 1, 2];
let array2 = [...array1,3,4,5];


for (let index = 0; index < array2.length; index++) {
    const element = array2[index];
    console.log(element);
}

// rest parameters
function sumAll(...args) { // args is the name for the array
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
  console.log( sumAll(1) ); // 1
  console.log( sumAll(1, 2) ); // 3
  console.log( sumAll(1, 2, 3) ); // 6