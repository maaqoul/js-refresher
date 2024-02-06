import Person from "./Person.js";

class Employee extends Person {
  constructor(name, age, salary) {
    super(age, name);
    this.salary = salary;
  }

  showEmployeeDetails() {
    return `${this.describe()}, Salary: ${this.salary}`;
  }
}

export default Employee;
