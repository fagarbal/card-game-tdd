describe("Card", () => {
	let cardOrder;
	let card1,card2,card3,card4;

	beforeEach(() => {
		const spade = new Spade();
		const clubs = new Club();
		const diamond = new Diamond();
		const hearts = new Heart();

		const ace = new Ace();
		const king = new King();
		const three = new Three();

		card1 = new Card(spade, ace);
		card2 = new Card(spade, king);

		card3 = new Card(diamond, king);
		card4 = new Card(clubs, three);

		const typeOrder = [spade, clubs, diamond, hearts];
		const numbersOrder = [ace, king, three];

		cardTypesOrder = new CardTypesOrder(typeOrder);

		cardNumbersOrder = new CardNumbersOrder(numbersOrder);

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