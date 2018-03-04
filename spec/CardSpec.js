describe("Card", () => {
	let card, image;

	beforeEach(() => {
		image = new String();

		card = new Card(SPADE, ACE, image);
	});

	it("should be a Card", () => {
		expect(card.constructor).toBe(Card);
	});

	it("should have Type", () => {
		expect(card.getType()).toEqual(SPADE);
	});

	it("should have Number", () => {
		expect(card.getNumber()).toEqual(ACE);
	});

	it("should have Image", () => {
		expect(card.getImage()).toEqual(image);
	});
});