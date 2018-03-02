describe("Card", () => {
  var cardOrder;
  var card1,card2,card3,card4;

  beforeEach(() => {
    var spade = new Spade();
    var clubs = new Clubs();
    var diamond = new Diamond();
    var hearts = new Hearts();

    var ace = new Ace();
    var king = new King();
    var three = new Three();

    card1 = new Card(spade, ace);
    card2 = new Card(spade, king);

    card3 = new Card(diamond, king);
    card4 = new Card(clubs, three);

    var typeOrder = [spade, clubs, diamond, hearts];
    var numbersOrder = [ace, king, three];

    cardTypesOrder = new CardTypesOrder(typeOrder);

    cardNumbersOrder = new CardNumbersOrder(numbersOrder);

    cardOrder = new CardOrder(cardTypesOrder, cardNumbersOrder);
  });

  it("should be a Card", () => {
    expect(card1.constructor).toBe(Card);
  });

  it("should return greater Card", () => {
    expect(cardOrder.greaterOf(card1, card2)).toBe(card1);
    expect(cardOrder.greaterOf(card2, card3)).toBe(card2);
    expect(cardOrder.greaterOf(card1, card4)).toBe(card1);
    expect(cardOrder.greaterOf(card3, card4)).toBe(card3);
    expect(cardOrder.greaterOf(card2, card1)).toBe(card1);
  });

});