describe("Class", () => {
  class Customer {
    readonly id: number;
    name: string = "Guest";
    age?: number;
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }
  it("should can create class", () => {
    const customer: Customer = new Customer(1, "david");
    customer.age = 19;
    console.info(customer);
  });
  it("should can have methods", () => {
    const customer: Customer = new Customer(1, "Joker");
    customer.sayHello("Bruce Wayne");
  });
});
