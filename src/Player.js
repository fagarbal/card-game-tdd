class Player {
	constructor(name) {
		this.deck = new Deck();
		this.name = name || Player.name;
	}

	setName(name) {
		this.name = name;
	}

	getName(name) {
		return this.name;
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