describe("Interface", () => {
  interface HasName {
    name: string;
  }
  interface CanSayHello {
    sayHello(name: string): void;
  }
  class Person implements HasName, CanSayHello {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${name}`);
    }
  }
  it("should support inheritance", () => {
    const person = new Person("Joker");
    person.sayHello("Bruce Wayne");
  });
});
