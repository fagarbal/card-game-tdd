class Game {
	constructor() {
		const typeOrder = new CardTypeOrder(TYPE_ORDER);
		const numberOrder = new CardNumberOrder(NUMBER_ORDER);

		this.deck = new Deck(GAME_CARDS);
		this.cardOrder = new CardOrder(typeOrder, numberOrder);

		this.players = [];
	}

	addPlayer() {
		const player = new Player();

		this.players.push(player);
	}

	initGame() {
		this.deck.reset();
		this.deck.shuffle();

		this.drawCards();
	}

	drawCards() {
		this.players.forEach((player) => {
			const card = this.deck.drawCard();

			if (!card) return;

			player.addCards(card);
		});
		
		const cardsLeft = this.deck.getCards();

		if (cardsLeft.length) this.drawCards();
	}

	roundResult() {
		const cards = [];

		const players = this.players.filter((player) => player.getDeck().getCards().length).slice();

		if (!players.length) return;

		const firstPlayer = players.shift();		
		const firstCard = firstPlayer.faceUpCard();

		cards.push(firstCard);

		const looser = players.reduce((prevCard, nextPlayer) => {
			const nextCard = nextPlayer.faceUpCard();

			cards.push(nextCard);

			return this.cardOrder.greaterOf(prevCard, nextCard);
		}, firstCard);

		return {
			looser, cards
		};
	}

	nextRound() {
		const roundResult = this.roundResult();
		if (!roundResult) return;

		const looserCard = roundResult.looser;
		const allCards = roundResult.cards;

		const players = this.players.filter((player) => player.getDeck().getCards().length);

		const looserPlayer = players.find((player) => player.getDeck().findCard(looserCard));
		if (!looserPlayer) return;
		looserPlayer.addCards(allCards);
	}
}
