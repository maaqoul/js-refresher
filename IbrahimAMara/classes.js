class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to calculate area
    describe() {
        return `Name: ${this.name} , age : ${this.age}`;
    }

    static compareAge(person1, person2) {
        if (person1.age > person2.age) {
            return `${person1.name} est plus grand que ${person2.name}`;
        } else if (person1.age < person2.age) {
            return `${person2.name} est plus grand que ${person1.name}`;
        } else {
            return `${person1.name} et ${person2.name} sont du même age`;
        }
    }
}

class Employee extends Person
{
constructor(name,age,salary) {
    super(name,age);
    this.salary=salary;
}
    showEmployeeDetails(){
    return super.describe() + " salary : " + this.salary;
    }
}

const employe=new Employee('ibrahim','25','SQLI');
console.log(employe.showEmployeeDetails())
console.log(Person.compareAge(employe, new Person('amara', 28)));