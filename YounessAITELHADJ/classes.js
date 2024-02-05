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
          return `${person1.name} is older than ${person2.name}`;
        } else if (person1.age < person2.age) {
          return `${person1.name} is younger than ${person2.name}`;
        } else {
          return `${person1.name} and ${person2.name} are the same age`;
        }
      }
  }
  
  class Employee extends Person {
    constructor(name, age, salary) {
      super(name, age);
      this.salary = salary;
    }
  
    showEmployeeDetails() {
      return `${super.describe()}, Salary: ${this.salary}`;
    }
  }
  

  const person = new Person('youness', 25);
  console.log(person.describe());
  
  const employee = new Employee('ali', 25, 7000);
  console.log(employee.showEmployeeDetails());

  console.log(Person.compareAge(person, employee));
  