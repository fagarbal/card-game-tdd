class Player {
	constructor(deck = new Deck()) {
		this.deck = deck;
	} 

	setDeck(deck) {
		this.deck = deck;
	}

	getDeck() {
		return this.deck;
	}

	faceUpCard() {
		return this.deck.drawCard();
	}

	addCards(cards) {
		this.deck.addCards(cards);
	}
}