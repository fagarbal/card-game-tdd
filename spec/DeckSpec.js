describe("Deck", () => {
	let deck, cards, otherCards;

	beforeEach(() => {
		cards = [
			new Card(SPADE, ACE),
			new Card(SPADE, KING),
			new Card(SPADE, THREE),
			new Card(CLUB, ACE),
			new Card(CLUB, KING),
			new Card(CLUB, THREE),
			new Card(DIAMOND, ACE),
			new Card(DIAMOND, KING),
			new Card(DIAMOND, THREE),
			new Card(HEART, ACE),
			new Card(HEART, KING),
			new Card(HEART, THREE)
		];

		otherCards = [
			new Card(SPADE, TWO),
			new Card(CLUB, TWO),
			new Card(DIAMOND, TWO),
			new Card(HEART, TWO)
		];

		deck = new Deck(cards);
	});

	it("should be a Deck", () => {
		expect(deck.constructor).toBe(Deck);
	});

	it("should have cards", () => {
		expect(deck.getCards().length).toEqual(12);
	});

	it("should have shuffle method", () => {
		expect(deck.shuffle).toBeDefined();
	});

	it("should shuffle the card order", () => {
		expect(deck.cards).toEqual(cards);

		deck.shuffle();

		expect(deck.cards).not.toEqual(cards);
	});

	it("should have getCard method", () => {
		expect(deck.getCard).toBeDefined();
	});

	it("should getCard return card", () => {
		expect(deck.getCards().length).toEqual(12);

		const playerCard = deck.getCard();

		expect(playerCard.constructor).toBe(Card);
		expect(deck.getCards().length).toEqual(11);
	});

	it("should have addCards method", () => {
		expect(deck.addCards).toBeDefined();
	});

	it("should addCards add cards", () => {
		expect(deck.getCards().length).toEqual(12);

		deck.addCards(otherCards);

		expect(deck.getCards().length).toEqual(16);
	});
});