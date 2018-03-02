describe("Card Types", () => {
  var spade;

  beforeEach(() => {
    spade = new Spade();
  });

  it("should be a Spade", () => {
    expect(spade.constructor).toBe(Spade);
  });
});