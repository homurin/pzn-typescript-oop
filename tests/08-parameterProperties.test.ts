describe("Parameter Properties", () => {
  class Person {
    constructor(public name: string = "") {}
  }
  it("should support in typescript", () => {
    const person = new Person("Pablo");
    console.info(person.name);
  });
});
