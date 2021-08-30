class Person{
    constructor(name){
        this.name=name;
    }
    walk(){
        console.log(this.name+' walks');
    }
    talk(){
        console.log(this.name+' talks')
    }
}

let person=new Person('amir');
person.walk();
person.talk();