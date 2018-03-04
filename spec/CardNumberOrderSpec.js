describe("Card Number Order", () => {
	let cardNumberOrder;

	beforeEach(() => {
		cardNumberOrder = new CardNumberOrder(NUMBER_ORDER);
	});

	it("should have greaterOf function", () => {   
		expect(cardNumberOrder.greaterOf).toBeDefined();
	});

	it("should return the greater of two card numbers", () => {   
		expect(cardNumberOrder.greaterOf(ACE, TWO)).toEqual(ACE);
		expect(cardNumberOrder.greaterOf(KING, ACE)).toEqual(ACE);
		expect(cardNumberOrder.greaterOf(TEN, FIVE)).toEqual(TEN);
		expect(cardNumberOrder.greaterOf(JACK, ACE)).toEqual(ACE);
		expect(cardNumberOrder.greaterOf(SIX, SEVEN)).toEqual(SEVEN);
	});
});
