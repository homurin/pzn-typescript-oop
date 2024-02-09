describe("Visibility", () => {
  class Counter {
    // private: only accessable in this class
    private privateCounter: number = 0;

    // protected:
    protected counter: number = 0;

    public increament(): void {
      this.privateCounter++;
    }
    public getCounter(): number {
      return this.privateCounter;
    }
  }
  class DoubleCounter extends Counter {
    public increament(): void {
      this.counter += 2;
    }
    public getCounter(): number {
      return this.counter;
    }
  }
  it("should support private", () => {
    const counter = new Counter();

    counter.increament();
    counter.increament();
    counter.increament();
    console.info(counter.getCounter());
  });
  it("should support protected", () => {
    const doubleCounter = new DoubleCounter();
    doubleCounter.increament();
    doubleCounter.increament();
    console.info(doubleCounter.getCounter());
  });
});
