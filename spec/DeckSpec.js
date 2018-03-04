describe("Deck", () => {
	let deck, cards, otherCards;

	beforeEach(() => {

		const spade = new Spade();
		const clubs = new Club();
		const diamond = new Diamond();
		const hearts = new Heart();


		const ace = new Ace();
		const king = new King();
		const three = new Three();
		const two = new Two();

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

		otherCards = [
			new Card(spade, two),
			new Card(clubs, two),
			new Card(diamond, two),
			new Card(hearts, two)
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