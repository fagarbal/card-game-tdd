describe("Card", () => {
  var card;

  beforeEach(() => {
    var spade = new Spade();
    var ace = new Ace();
    card = new Card(spade, ace);
  });

  it("should be a Card", () => {
    expect(card.constructor).toBe(Card);
  });
});