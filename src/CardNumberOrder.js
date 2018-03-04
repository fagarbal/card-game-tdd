class CardNumberOrder {
	constructor(numberOrder) {
		this.numberOrder = numberOrder;
	}

	greaterOf(typeA, typeB) {
		const orderA = this.numberOrder.indexOf(typeA);
		const orderB = this.numberOrder.indexOf(typeB);

		return orderA > orderB ? typeB : typeA;
	}
}