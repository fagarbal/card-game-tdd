describe("Card Numbers", () => {
	it("should be an Ace", () => {
		expect(ACE.constructor).toBe(Ace);
	});

	it("should be an King", () => {
		expect(KING.constructor).toBe(King);
	});

	it("should be an Queen", () => {
		expect(QUEEN.constructor).toBe(Queen);
	});

	it("should be an Jack", () => {
		expect(JACK.constructor).toBe(Jack);
	});

	it("should be an Two", () => {
		expect(TWO.constructor).toBe(Two);
	});

	it("should be an Three", () => {
		expect(THREE.constructor).toBe(Three);
	});

	it("should be an Four", () => {
		expect(FOUR.constructor).toBe(Four);
	});

	it("should be an Five", () => {
		expect(FIVE.constructor).toBe(Five);
	});

	it("should be an Six", () => {
		expect(SIX.constructor).toBe(Six);
	});

	it("should be an Seven", () => {
		expect(SEVEN.constructor).toBe(Seven);
	});

	it("should be an Eight", () => {
		expect(EIGHT.constructor).toBe(Eight);
	});

	it("should be an Nine", () => {
		expect(NINE.constructor).toBe(Nine);
	});

	it("should be an Ten", () => {
		expect(TEN.constructor).toBe(Ten);
	});
});