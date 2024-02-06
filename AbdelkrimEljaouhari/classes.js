class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    return console.log(`hi ${this.name} your age is ${this.age}`);
  }
  static compareAge(person1, person2) {
    if (person1.age > person2.age) {
      return person1.name;
    } else {
      return person2.name;
    }
  }
}
// person1
const person1 = new Person("ahmed", 19);
person1.describe(); //hi ahmed your age is 19
// person2
const person2 = new Person("oussama", 30);
//Extending Person class
class Employee extends Person {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
  showEmployeeDetails() {
    if (this.salary > 0) {
      return `hi ${this.name} your age is ${this.age} and your salary now is ${this.salary} DH `;
    } else {
      return `hi ${this.name} your age is ${this.age} you do not have any salary right now `;
    }
  }
}

const employee1 = new Employee("jalal", 30, 1500);
console.log(employee1.showEmployeeDetails()); //hi jalal your age is 30 and your salary now is 1500 DH

//comparing age of person1 and person2
console.log(Person.compareAge(person1, person2)); //oussame
