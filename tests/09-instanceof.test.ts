describe("Instance Of", () => {
  class Employee {}
  class Manager {}
  const employee = new Employee();
  const manager = new Manager();
  it("should have problem using typeof", () => {
    // typeof is always return object (LOL)
    console.info(typeof employee);
    console.info(typeof manager);
  });
  it("should support instanceof", () => {
    const employee = new Employee();
    const manager = new Manager();

    expect(employee instanceof Employee).toBe(true);
    expect(manager instanceof Manager).toBe(true);
  });
});
