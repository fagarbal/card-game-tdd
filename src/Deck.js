class Deck {
	constructor(cards) {
		this.cards = cards.slice();
	}

	getCards(num) {
		return this.cards.splice(0, num);
	}

	shuffle() {
		this.cards.sort(() => 0.5 - Math.random());
	}
}