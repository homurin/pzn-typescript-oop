describe("Method Overriding", () => {
  class Employee {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }
  class Manager extends Employee {
    sayHello(name: string): void {
      super.sayHello(name);
      console.info(`I am your manager`);
    }
  }
  it("should support", () => {
    const employee: Employee = new Employee("Spongebob Squarepants");
    const manager: Manager = new Manager("Eugene H. Krabs ");
    employee.sayHello("Mr. Krabs");
    manager.sayHello("Spongebob");
  });
});
