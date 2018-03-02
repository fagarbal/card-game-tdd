describe("Card Numbers", () => {
  var ace,king,queen,jack;

  it("should be an Ace", () => {
    ace = new Ace();

    expect(ace.constructor).toBe(Ace);
  });

  it("should be an King", () => {
    king = new King();

    expect(king.constructor).toBe(King);
  });

  it("should be an Queen", () => {
    queen = new Queen();

    expect(queen.constructor).toBe(Queen);
  });

  it("should be an Jack", () => {
    jack = new Jack();

    expect(jack.constructor).toBe(Jack);
  });
});