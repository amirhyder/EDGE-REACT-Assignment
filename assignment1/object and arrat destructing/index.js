let person={
    name:'Amir Hyder',
    department:'Intigration framework',
    walk () {
       return 'Amir walks'
    },
    talk() {
       return 'Amir talks'  
    }
}

console.log(person.name);
console.log(person.department);
console.log(person.talk());
console.log(person.walk());

//array desctructing

let [firstName,,thirdName] = ["alpha", "beta", "gamma", "delta"];
console.log(firstName);//"alpha"
console.log(thirdName);//"gamma"