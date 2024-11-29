module.exports = class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log(this.name);
    }

    static create(obj, param2, param3) { // belongs to the Person class
        return new Person(obj.name, obj.age);
    }
}