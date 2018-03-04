class CardOrder {
	constructor(cardTypesOrder, cardNumbersOrder) {
		this.cardTypesOrder = cardTypesOrder;
		this.cardNumbersOrder = cardNumbersOrder;
	}

	greaterOf(cardA, cardB) {
		const orderNumber = this.cardNumbersOrder.greaterOf(cardA.getNumber(), cardB.getNumber());
		const orderType = this.cardTypesOrder.greaterOf(cardA.getType(), cardB.getType());

		if (orderNumber === cardA.getNumber() && orderNumber === cardB.getNumber()) {
			return orderType === cardA.getType() ? cardA : cardB;
		}

		return orderNumber === cardA.getNumber() ? cardA : cardB;
	}
}