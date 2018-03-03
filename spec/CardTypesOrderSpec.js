describe("Card Types Order", () => {
	let spade, diamond, hearts, clubs;
	let cardTypesOrder;

	beforeEach(() => {
		spade = new Spade();
		clubs = new Club();
		diamond = new Diamond();
		hearts = new Heart();

		const typeOrder = [spade, clubs, diamond, hearts];

		cardTypesOrder = new CardTypesOrder(typeOrder);
	});

	it("should have greaterOf function", () => {   
		expect(cardTypesOrder.greaterOf).toBeDefined();
	});

	it("should return the greater of two card types", () => {   
		expect(cardTypesOrder.greaterOf(spade, clubs).constructor).toBe(Spade);
		expect(cardTypesOrder.greaterOf(clubs, spade).constructor).toBe(Spade);
		expect(cardTypesOrder.greaterOf(diamond, clubs).constructor).toBe(Club);
		expect(cardTypesOrder.greaterOf(diamond, hearts).constructor).toBe(Diamond);
		expect(cardTypesOrder.greaterOf(hearts, spade).constructor).toBe(Spade);
	});
});
