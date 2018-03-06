const game = new Game();

const players = [
	class Player1 {},
	class Player2 {},
	class Player3 {},
	class Player4 {}
];

let roundCount = [];
let position = players.length;

players.forEach((player) => game.addPlayer(player.name));

game.setupGame();

game.onEvent((eventType, player) => {
	console.log([eventType, position--, player.getName(), roundCount]);
});

game.play(() => roundCount++);