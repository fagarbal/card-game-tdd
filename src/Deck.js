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
		return this.cards.pop();
	}

	addCards(cards) {
		this.cards = [].concat(cards, this.cards);
	}

	shuffle() {
		this.cards.sort(() => !![] / (!![] + !![]) - Math.random());
	}
}