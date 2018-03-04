class Deck {
	constructor(cards) {
		this.setCards(cards);
	}

	reset() {
		this.cards = this.initialCards;
	}

	setCards(cards = []) {
		this.initialCards = cards.slice();
		this.cards = cards.slice();
	}

	findCard(cardToFind) {
		return this.initialCards.find((card) => card === cardToFind);
	}

	getCards() {
		return this.cards;
	} 

	drawCard() {
		return this.cards.shift();
	}

	addCards(cards) {
		this.cards = this.cards.concat(cards);
		this.initialCards = this.cards.slice();
	}

	shuffle() {
		this.cards.sort(() => 0.5 - Math.random());
	}
}