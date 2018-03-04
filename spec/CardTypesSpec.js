describe("Card Types", () => {
	it("should be a Spade", () => {
		expect(SPADE.constructor).toBe(Spade);
	});

	it("should be a Diamond", () => {
		expect(DIAMOND.constructor).toBe(Diamond);
	});

	it("should be a Heart", () => {
		expect(HEART.constructor).toBe(Heart);
	});

	it("should be a Club", () => {
		expect(CLUB.constructor).toBe(Club);
	});
});