describe("Class Relationship", () => {
  class Person {
    constructor(public name: string) {}
  }
  class Customer {
    constructor(public name: string) {}
  }
  it("should support", () => {
    // ok, what the hell is this?

    const customer: Person = new Customer("Plankton");
    console.info(customer);
  });
});
