describe("Player", () => {
	let player, deck;

	beforeEach(() => {
		const spade = new Spade();
		const clubs = new Club();
		const diamond = new Diamond();
		const hearts = new Heart();


		const ace = new Ace();
		const king = new King();
		const three = new Three();

		const cards = [
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

		player = new Player(deck);
	});

	it("should be a Player", () => {
		expect(player.constructor).toBe(Player);
	});

	it("should have a deck", () => {
		expect(player.getDeck()).toEqual(deck);
	});

	it("should have faceUpCard method", () => {
		expect(player.faceUpCard).toBeDefined();
	});

	it("should have addCards method", () => {
		expect(player.addCards).toBeDefined();
	});
});