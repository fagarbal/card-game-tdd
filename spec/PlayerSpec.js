describe("Player", () => {
	let player, deck;

	beforeEach(() => {
		deck = new Deck(GAME_CARDS);

		player = new Player();

		player.setDeck(deck);
	});

	it("should be a Player", () => {
		expect(player.constructor).toBe(Player);
	});

	it("should have setDeck", () => {
		expect(player.setDeck).toBeDefined();
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