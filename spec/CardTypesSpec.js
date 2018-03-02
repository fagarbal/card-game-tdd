describe("Card Types", () => {
  var spade;
  var diamond;
  var hearts;

  beforeEach(() => {
    spade = new Spade();
    diamond = new Diamond();
    hearts = new Hearts();
  });

  it("should be a Spade", () => {
    expect(spade.constructor).toBe(Spade);
  });

  it("should be a Diamond", () => {
    expect(diamond.constructor).toBe(Diamond);
  });

  it("should be a Hearts", () => {
    expect(hearts.constructor).toBe(Hearts);
  });

});