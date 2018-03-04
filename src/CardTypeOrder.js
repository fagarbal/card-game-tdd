class CardTypeOrder {
	constructor(typeOrder) {
		this.typeOrder = typeOrder;
	}

	greaterOf(typeA, typeB) {
		const orderA = this.typeOrder.indexOf(typeA);
		const orderB = this.typeOrder.indexOf(typeB);

		return orderA > orderB ? typeB : typeA;
	}
}