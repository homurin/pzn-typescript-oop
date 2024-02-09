describe("Static", () => {
  class Configuration {
    static NAME: string = "Learn OOP in TypeScript";
    static VERSION: number = 1.0;
    static AUTHOR: string = "FireShip";
  }
  class MathUtil {
    static sum(...values: number[]): number {
      let total: number = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }
  }
  it("should support", () => {
    console.info(Configuration.NAME);
    console.info(Configuration.VERSION);
    console.info(Configuration.AUTHOR);
  });
  it("should support static method", () => {
    expect(MathUtil.sum(1, 2, 3)).toBe(6);
  });
});
