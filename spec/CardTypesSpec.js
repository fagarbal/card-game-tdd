describe("Card Types", () => {
  var spade;
  var diamond;

  beforeEach(() => {
    spade = new Spade();
    diamond = new Diamond();
  });

  it("should be a Spade", () => {
    expect(spade.constructor).toBe(Spade);
  });

  it("should be a Diamond", () => {
    expect(diamond.constructor).toBe(Diamond);
  });

  

});