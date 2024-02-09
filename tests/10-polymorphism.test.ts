describe("Polymorphism", () => {
  // polymopism
  class Employee {
    constructor(public name: string = "") {}
  }
  class Manager extends Employee {}
  class VicePresident extends Manager {}

  // function polymorphism and type cast

  function sayHello(employee: Employee): string {
    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      return `Hello VP ${vp.name}`;
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      return `Hello manager ${manager.name}`;
    } else {
      return `Hello employee ${employee.name}`;
    }
  }

  function wrongSayHello(employee: Employee): string {
    // vice president will return true at manager block
    if (employee instanceof Manager) {
      const manager = employee as Manager;
      return `Hello manager ${manager.name}`;
    } else if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      return `Hello VP ${vp.name}`;
    } else {
      return `Hello employee ${employee.name}`;
    }
  }

  it("should support", () => {
    let employee: Employee = new Employee("Monkey D. Garp");
    console.info(employee);

    employee = new Manager("Monkey D. Garp");
    console.info(employee);

    employee = new VicePresident("Monkey D. Garp");
    console.info(employee);
  });
  it("should method parameter polymorpism", () => {
    console.info(sayHello(new Employee("Squidward")));
    console.info(sayHello(new Manager("Spongebob")));
    console.info(sayHello(new VicePresident("Krab")));
  });
  it("should method parameter polymorpism wrong", () => {
    console.info(wrongSayHello(new Employee("Squidward")));
    console.info(wrongSayHello(new Manager("Spongebob")));
    console.info(wrongSayHello(new VicePresident("Krab")));
  });
});
