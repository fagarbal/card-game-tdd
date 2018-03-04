describe("Card Types Order", () => {
	let cardTypesOrder;

	beforeEach(() => {
		cardTypesOrder = new CardTypesOrder(TYPE_ORDER);
	});

	it("should have greaterOf function", () => {   
		expect(cardTypesOrder.greaterOf).toBeDefined();
	});

	it("should return the greater of two card types", () => {   
		expect(cardTypesOrder.greaterOf(SPADE, CLUB)).toEqual(SPADE);
		expect(cardTypesOrder.greaterOf(CLUB, SPADE)).toEqual(SPADE);
		expect(cardTypesOrder.greaterOf(DIAMOND, CLUB)).toEqual(CLUB);
		expect(cardTypesOrder.greaterOf(DIAMOND, HEART)).toEqual(DIAMOND);
		expect(cardTypesOrder.greaterOf(HEART, SPADE)).toEqual(SPADE);
	});
});
