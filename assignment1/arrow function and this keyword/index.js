let square=number=>number*number
console.log('square is '+square(4));

let sum=(number1,number2)=>number1+number2
console.log('Sum is:'+sum(3,5));

let print=()=>{
    return 'I am Amir Hyder';
}

console.log(print())

//arrow function with this keyword

// define a function
const myFunction = () => {
    console.log(this);
  };
  
  // call it
  myFunction();