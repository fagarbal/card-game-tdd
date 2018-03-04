describe("Card Numbers Order", () => {
	let cardNumbersOrder;

	beforeEach(() => {
		cardNumbersOrder = new CardNumbersOrder(NUMBER_ORDER);
	});

	it("should have greaterOf function", () => {   
		expect(cardNumbersOrder.greaterOf).toBeDefined();
	});

	it("should return the greater of two card numbers", () => {   
		expect(cardNumbersOrder.greaterOf(ACE, TWO)).toEqual(ACE);
		expect(cardNumbersOrder.greaterOf(KING, ACE)).toEqual(ACE);
		expect(cardNumbersOrder.greaterOf(TEN, FIVE)).toEqual(TEN);
		expect(cardNumbersOrder.greaterOf(JACK, ACE)).toEqual(ACE);
		expect(cardNumbersOrder.greaterOf(SIX, SEVEN)).toEqual(SEVEN);
	});
});
