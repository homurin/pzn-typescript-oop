describe("Inheritance", () => {
  class Crook {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  class Hitman extends Crook {}

  class Boss extends Hitman {}
  it("should support", () => {
    const crook = new Crook("Tom Holland");
    console.info(crook.name);

    const hitman = new Hitman("Andrew Garfield");
    console.info(hitman);

    const boss = new Boss("Bully Maguire");
    console.info(boss);
  });
});
