describe("Abstract Class", () => {
  // cant intansiated

  abstract class Customer {
    readonly id: string;
    constructor(id: string) {
      this.id = id;
    }
    wave(): void {
      console.info("Hello!");
    }
    abstract sayHello(name: string): void;
  }
  class RegularCustomer extends Customer {
    protected name: string;
    constructor(id: string, name: string) {
      super(id);
      this.name = name;
    }
    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }
  it("should support", () => {
    const regularCustomer = new RegularCustomer("0001", "Harold");
    console.info(regularCustomer);
  });
});
