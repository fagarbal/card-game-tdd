class Player {
	constructor(deck) {
		this.deck = deck;
	}

	getDeck() {
		return this.deck;
	}

	faceUpCard() {
		return this.deck.getCard();
	}

	addCards(cards) {
		this.deck.addCards(cards);
	}
}