describe("Super Contructor", () => {
  class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  class Employee extends Person {
    division: string;
    constructor(firstName: string, lastName: string, division: string) {
      super(firstName, lastName);
      this.division = division;
    }
  }
  it("should support", () => {
    const employee: Employee = new Employee("Eren", "Jaegar", "Survey Corps");
    console.info(employee);
  });
});
