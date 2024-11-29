const Person = require("./person");
const Database = require("./database");

console.log("Hello World");

const alper = new Person("Alper", 28);
const zubizaretta = new Person("Zubi", 23);

/* window.addEventListener('click', (event) => {
    alert('hello') //callback function
}) */

const instructors = [alper, zubizaretta];

Database.save(instructors, (err) => 
    console.log("ERROR:", err));


console.log("are we there yet???????");
/* const loadedInstructors = Database.load();

const convertedInstructors = loadedInstructors.map(Person.create);
console.log(convertedInstructors); */

/* const firstPerson = new Person(loadedInstructors[0].name, loadedInstructors[0].age);  */// this is not recommended because I have to know all properties of Person to create a new Person this way

/* firstPerson.sayName();
 */
/* const secondPerson = Person.create(loadedInstructors[1]);
secondPerson.sayName(); */
/* console.log("LOADED_FILE: ", loadedInstructors[0].name);
 */

// homework: make different classFiles with the classes you created w/prevHomework

// homework3: demonstrate this with your week2 HW.