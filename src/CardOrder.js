class CardOrder {
	constructor(cardTypesOrder, cardNumbersOrder) {
		this.cardTypesOrder = cardTypesOrder;
		this.cardNumbersOrder = cardNumbersOrder;
	}

	greaterOf(cardA, cardB){
		const orderNumber = this.cardNumbersOrder.greaterOf(cardA.number, cardB.number);
		const orderType = this.cardTypesOrder.greaterOf(cardA.type, cardB.type);

		if (orderNumber === cardA.number && orderNumber === cardB.number) {
			return orderType === cardA.type ? cardA : cardB;
		}

		return orderNumber === cardA.number ? cardA : cardB;
	}
}