class Person {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }

  describe() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }

  static compareAge(person1, person2) {
    if (person1.age > person2.age) return person1.name;
    return person2.name;
  }
}

export default Person;
