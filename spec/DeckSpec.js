describe("Deck", () => {
  let deck, cards;

  beforeEach(() => {

  	const spade = new Spade();
    const clubs = new Club();
    const diamond = new Diamond();
    const hearts = new Heart();


    const ace = new Ace();
    const king = new King();
    const three = new Three();

  	cards = [
		new Card(spade, ace),
		new Card(spade, king),
		new Card(spade, three),
		new Card(clubs, ace),
		new Card(clubs, king),
		new Card(clubs, three),
		new Card(diamond, ace),
		new Card(diamond, king),
		new Card(diamond, three),
		new Card(hearts, ace),
		new Card(hearts, king),
		new Card(hearts, three)
	];

    deck = new Deck(cards);
  });

  it("should be a Deck", () => {
    expect(deck.constructor).toBe(Deck);
  });

  it("should have cards", () => {
    expect(deck.cards.length).toEqual(12);
  });

  it("should have shuffle method", () => {
    expect(deck.shuffle).toBeDefined();
  });

  it("should shuffle the card order", () => {
  	deck.shuffle();

  	expect(deck.cards).not.toEqual(cards);
  });

  it("should have getCards method", () => {
    expect(deck.getCards).toBeDefined();
  });

  it("should getCard return cards", () => {
  	const playerCards = deck.getCards(6);

    expect(playerCards.length).toEqual(6);
    expect(deck.cards.length).toEqual(6);
  });
});