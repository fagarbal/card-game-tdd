class Deck {
	constructor(cards) {
		this.cards = cards.slice();
	}

	getCards() {
		return this.cards;
	} 

	getCard() {
		return this.cards.shift();
	}

	addCards(cards) {
		this.cards = this.cards.concat(cards);
	}

	shuffle() {
		this.cards.sort(() => 0.5 - Math.random());
	}
}