describe("Card Types", () => {
  var spade;
  var diamond;
  var hearts;
  var clubs;

  it("should be a Spade", () => {
    spade = new Spade();

    expect(spade.constructor).toBe(Spade);
  });

  it("should be a Diamond", () => {
    diamond = new Diamond();

    expect(diamond.constructor).toBe(Diamond);
  });

  it("should be a Hearts", () => {
    hearts = new Hearts();

    expect(hearts.constructor).toBe(Hearts);
  });

  it("should be a Clubs", () => {
    clubs = new Clubs();

    expect(clubs.constructor).toBe(Clubs);
  });

});