describe("Środowisko testowe Jasmine", () => {
  it("Test wartości liczbowej", () => expect(11).toBeGreaterThan(10));
  it("Test wartości tekstowej", () => expect("Gliwice").toMatch("^Gli"));

});
