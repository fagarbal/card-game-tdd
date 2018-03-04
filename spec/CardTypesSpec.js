describe("Card Types", () => {
	let spade, diamond, hearts, clubs;

	it("should be a Spade", () => {
		spade = new Spade();

		expect(spade.constructor).toBe(Spade);
	});

	it("should be a Diamond", () => {
		diamond = new Diamond();

		expect(diamond.constructor).toBe(Diamond);
	});

	it("should be a Heart", () => {
		hearts = new Heart();

		expect(hearts.constructor).toBe(Heart);
	});

	it("should be a Club", () => {
		clubs = new Club();

		expect(clubs.constructor).toBe(Club);
	});
});