describe("Card", () => {
	let cardOrder;
	let card1, card2, card3, card4;

	beforeEach(() => {
		card1 = new Card(SPADE, ACE);
		card2 = new Card(SPADE, KING);
		card3 = new Card(DIAMOND, KING);
		card4 = new Card(CLUB, THREE);

		cardTypesOrder = new CardTypesOrder(TYPE_ORDER);

		cardNumbersOrder = new CardNumbersOrder(NUMBER_ORDER);

		cardOrder = new CardOrder(cardTypesOrder, cardNumbersOrder);
	});

	it("should be a Card", () => {
		expect(card1.constructor).toBe(Card);
	});

	it("should return greater Card", () => {
		expect(cardOrder.greaterOf(card1, card2)).toBe(card1);
		expect(cardOrder.greaterOf(card2, card3)).toBe(card2);
		expect(cardOrder.greaterOf(card1, card4)).toBe(card1);
		expect(cardOrder.greaterOf(card3, card4)).toBe(card3);
		expect(cardOrder.greaterOf(card2, card1)).toBe(card1);
	});
});