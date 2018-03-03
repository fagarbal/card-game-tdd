describe("Card Numbers Order", () => {
	let ace, king, queen, jack, two, three, four, five, six, seven, eight, nine, ten;

	let cardNumbersOrder;

	beforeEach(() => {
		ace = new Ace(); 
		king = new King(); 
		queen = new Queen(); 
		jack = new Jack(); 
		two = new Two(); 
		three = new Three(); 
		four = new Four(); 
		five = new Five(); 
		six = new Six(); 
		seven = new Seven(); 
		eight = new Eight(); 
		nine = new Nine(); 
		ten = new Ten(); 

		const numbersOrder = [ace,king,queen,jack, ten, nine, eight, seven, six, five, four, three, two];

		cardNumbersOrder = new CardNumbersOrder(numbersOrder);
	});

	it("should have greaterOf function", () => {   
		expect(cardNumbersOrder.greaterOf).toBeDefined();
	});

	it("should return the greater of two card numbers", () => {   
		expect(cardNumbersOrder.greaterOf(ace, two).constructor).toBe(Ace);
		expect(cardNumbersOrder.greaterOf(king, ace).constructor).toBe(Ace);
		expect(cardNumbersOrder.greaterOf(ten, five).constructor).toBe(Ten);
		expect(cardNumbersOrder.greaterOf(jack, ace).constructor).toBe(Ace);
		expect(cardNumbersOrder.greaterOf(six, seven).constructor).toBe(Seven);
	});
});
