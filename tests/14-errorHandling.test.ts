describe("Error Handling", () => {
  class ValidationError extends Error {
    constructor(message: string) {
      super(message);
    }
  }
  function doubleit(val: number): number {
    if (val < 0) {
      throw new ValidationError("Value cannot be less than 0");
    }
    return val * 2;
  }
  it("should support", () => {
    try {
      const x = doubleit(2);
      const y = doubleit(-1);
      console.info(x);
      console.info(y);
    } catch (err) {
      if (err instanceof ValidationError) {
        console.info(err.message);
      }
    }
  });
});
