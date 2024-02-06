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
        return `Name: ${this.name}, Age: ${this.age}, Salary ${this.salary}`;
    }
}

const prs1 = new Person('Abdo', 30);

const prs2 = new Person('Baya', 37);

console.log("the older is : ",Person.compareAge(prs1, prs2));