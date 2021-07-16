class Person {
    constructor(name = "yes", age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi, I am ${ this.name }`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person{

}

const me = new Student("Hello", 234, "Comp sci");
console.log(me);
console.log(me.name);
console.log(me.hasMajor());