//let is used in block level 
//const is also used in block level but its value can not be changed

function myFunction(){
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

myFunction();

const pi=3.14;
pi=3.44;
//here variable pi can not be changed
console.log(pi);
