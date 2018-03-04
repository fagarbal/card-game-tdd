describe("Card Type Order", () => {
	let cardTypeOrder;

	beforeEach(() => {
		cardTypeOrder = new CardTypeOrder(TYPE_ORDER);
	});

	it("should have greaterOf function", () => {   
		expect(cardTypeOrder.greaterOf).toBeDefined();
	});

	it("should return the greater of two card types", () => {   
		expect(cardTypeOrder.greaterOf(SPADE, CLUB)).toEqual(SPADE);
		expect(cardTypeOrder.greaterOf(CLUB, SPADE)).toEqual(SPADE);
		expect(cardTypeOrder.greaterOf(DIAMOND, CLUB)).toEqual(CLUB);
		expect(cardTypeOrder.greaterOf(DIAMOND, HEART)).toEqual(DIAMOND);
		expect(cardTypeOrder.greaterOf(HEART, SPADE)).toEqual(SPADE);
	});
});
