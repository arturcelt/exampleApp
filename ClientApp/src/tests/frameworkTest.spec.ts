describe("Środowisko testowe Jasmine", () => {
  it("Test wartości liczbowej", () => expect(9).toBeGreaterThan(10));
  it("Test wartości tekstowej", () => expect("Gliwice").toMatch("^Gli"));

});
