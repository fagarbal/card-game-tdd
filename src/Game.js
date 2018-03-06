class Game {
	constructor() {
		const typeOrder = new CardTypeOrder(TYPE_ORDER);
		const numberOrder = new CardNumberOrder(NUMBER_ORDER);

		this.deck = new Deck(GAME_CARDS);
		this.cardOrder = new CardOrder(typeOrder, numberOrder);

		this.players = [];

		this.events = {
			WINNER: class Winner {},
			LOOSER: class Looser {}
		};
	}

	addPlayer(name) {
		const player = new Player();

		player.setName(name);

		this.players.push(player);
	}

	setupGame() {
		this.deck.reset();
		this.deck.shuffle();

		this.drawCards();

		this.currentPlayers = this.players.slice();
	}

	drawCards() {
		this.players.forEach((player) => {
			const card = this.deck.drawCard();

			if (card) player.addCards(card);
		});
		
		const cardsLeft = this.deck.getCards();

		if (cardsLeft.length) this.drawCards();
	}

	getActivePlayers() {
		return this.currentPlayers.filter((player) => player.getDeck().getCards().length);
	}

	getLooserPlayer(currentPlayers) {
		return this.currentPlayers.filter((playerA) => !currentPlayers.find((playerB) => playerB.name === playerA.name)).find((player) => player);
	}

	getNextPlayers() {
		const currentPlayers = this.getActivePlayers();
		const looserPlayer = this.getLooserPlayer(currentPlayers);

		if (looserPlayer) this._onEvent(this.events.LOOSER.name, looserPlayer);

		this.currentPlayers = currentPlayers;

		const playerA = this.currentPlayers.shift();
		const playerB = this.currentPlayers.shift();

		if (!playerB) return [playerA];

		this.currentPlayers.unshift(playerB);
		this.currentPlayers.push(playerA);

		return [playerA, playerB];
	} 

	playRound() {
		const [playerA, playerB] = this.getNextPlayers();

		if (!playerB) return playerA; 

		const cardA = playerA.faceUpCard();
		const cardB = playerB.faceUpCard();

		const winnerCard = this.cardOrder.greaterOf(cardA, cardB);

		const winnerPlayer = winnerCard === cardA ? playerA : playerB;


		winnerPlayer.addCards([cardA, cardB]);
	}

	play(callbackRound) {
		const winner = this.playRound();

		if (winner) return this._onEvent(this.events.WINNER.name, winner);
		
		if (callbackRound) callbackRound();

		return this.play(callbackRound);
	}

	onEvent(eventCallback) {
		this._onEvent = eventCallback;
	}
}
