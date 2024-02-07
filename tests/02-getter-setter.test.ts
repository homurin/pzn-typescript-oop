describe("Getter Setter", () => {
  class Category {
    _name?: string;
    get name(): string {
      if (this._name) {
        return this._name;
      } else {
        return "empty";
      }
    }
    set name(val: string) {
      if (val !== "") {
        this._name = val;
      }
    }
  }
  it("should support in class", () => {
    const category = new Category();

    console.info(category);
    console.info(category.name);

    category.name = "gaming";
    console.info(category.name);

    category.name = "";
    console.info(category.name);
  });
});
