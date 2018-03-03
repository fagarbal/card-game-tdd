describe("Card", () => {
	let card;

	beforeEach(() => {
		const spade = new Spade();
		const ace = new Ace();

		card = new Card(spade, ace);
	});

	it("should be a Card", () => {
		expect(card.constructor).toBe(Card);
	});
});