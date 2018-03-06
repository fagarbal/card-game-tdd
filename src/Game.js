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

	getPlayersWithCards(players) {
		return players.filter((player) => player.getDeck().getCards().length).slice();
	}

	getNextPlayer(recover) {
		if (!this.currentPlayers) this.currentPlayers = this.getPlayersWithCards(this.players);
		
		this.currentPlayers = this.getPlayersWithCards(this.currentPlayers);

		const next = this.currentPlayers.shift();

		if (next) {
			if (recover) this.currentPlayers.unshift(next);
			return next;
		}

		this.currentPlayers = this.currentPlayers.concat(this.getPlayersWithCards(this.players));

		return this.getNextPlayer(recover);
	}

	playRound() {

		const playerA = this.getNextPlayer();
		const playerB = this.getNextPlayer({});

		const cardA = playerA.faceUpCard();
		const cardB = playerB.faceUpCard();

		const winnerCard = this.cardOrder.greaterOf(cardA, cardB);

		const winnerPlayer = winnerCard === cardA ? playerA : playerB;

		winnerPlayer.addCards([cardA, cardB]);
	}
}

const game = new Game();

game.addPlayer();
game.addPlayer(); 
game.addPlayer(); 
game.addPlayer(); 

game.initGame();

for (var i = 0; i <= 1500; i++) {
	console.log("ROUND ", i)
	console.log(game.players[0].deck)
	console.log(game.players[1].deck)
	console.log(game.players[2].deck)
	console.log(game.players[3].deck)

	game.playRound();
}
