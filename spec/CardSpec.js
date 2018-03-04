describe("Card", () => {
	let card, spade, ace, image;

	beforeEach(() => {
		spade = new Spade();
		ace = new Ace();
		image = new String();

		card = new Card(spade, ace, image);
	});

	it("should be a Card", () => {
		expect(card.constructor).toBe(Card);
	});

	it("should have Type", () => {
		expect(card.getType()).toEqual(spade);
	});

	it("should have Number", () => {
		expect(card.getNumber()).toEqual(ace);
	});

	it("should have Image", () => {
		expect(card.getImage()).toEqual(image);
	});
});