import Person from "./Person.js";
import Employee from "./Employee.js";

const fun = () => {
  const employee = new Employee("Employee 1", 20, 10000);
  console.log("🚀 ~ fun ~ employee:", employee.showEmployeeDetails());

  const person1 = new Person("Person 1", 20);
  const person2 = new Person("Person 2", 30);
  console.log(
    "🚀 ~ fun ~ Person.compareAge:",
    Person.compareAge(person1, person2)
  );
};

fun();
