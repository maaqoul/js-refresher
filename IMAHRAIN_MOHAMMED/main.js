class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }

    static compareAge(person1, person2) {
        if (person1.age > person2.age) {
            return person1.name;
        } 

        return person2.name;
    }
}

class Employee extends Person {
    constructor(name, age, salary){
        super(name, age)
        this.salary = salary;
    }

    showEmployeeDetails() {
        return `Name: ${this.name}, Age: ${this.age} and Salary ${this.salary}`;
    }
}

const person1 = new Person('mimo', 25);
const person2 = new Person('nino', 27);

const emp = new Employee('mimo', 25, '15000.00');

console.log(Person.compareAge(person1, person2));

