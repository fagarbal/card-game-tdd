const SPADE = new Spade();
const CLUB = new Club();
const DIAMOND = new Diamond();
const HEART = new Heart();

const ACE = new Ace();
const KING = new King();
const QUEEN = new Queen();
const JACK = new Jack();
const TEN = new Ten();
const NINE = new Nine();
const EIGHT = new Eight();
const SEVEN = new Seven();
const SIX = new Six();
const FIVE = new Five();
const FOUR = new Four();
const THREE = new Three();
const TWO = new Two();

const GAME_CARDS = [
	new Card(SPADE, ACE),
	new Card(SPADE, KING),
	new Card(SPADE, QUEEN),
	new Card(SPADE, JACK),
	new Card(SPADE, TEN),
	new Card(SPADE, NINE),
	new Card(SPADE, EIGHT),
	new Card(SPADE, SEVEN),
	new Card(SPADE, SIX),
	new Card(SPADE, FIVE),
	new Card(SPADE, FOUR),
	new Card(SPADE, THREE),
	new Card(SPADE, TWO),
	new Card(CLUB, ACE),
	new Card(CLUB, KING),
	new Card(CLUB, QUEEN),
	new Card(CLUB, JACK),
	new Card(CLUB, TEN),
	new Card(CLUB, NINE),
	new Card(CLUB, EIGHT),
	new Card(CLUB, SEVEN),
	new Card(CLUB, SIX),
	new Card(CLUB, FIVE),
	new Card(CLUB, FOUR),
	new Card(CLUB, THREE),
	new Card(CLUB, TWO),
	new Card(DIAMOND, ACE),
	new Card(DIAMOND, KING),
	new Card(DIAMOND, QUEEN),
	new Card(DIAMOND, JACK),
	new Card(DIAMOND, TEN),
	new Card(DIAMOND, NINE),
	new Card(DIAMOND, EIGHT),
	new Card(DIAMOND, SEVEN),
	new Card(DIAMOND, SIX),
	new Card(DIAMOND, FIVE),
	new Card(DIAMOND, FOUR),
	new Card(DIAMOND, THREE),
	new Card(DIAMOND, TWO),
	new Card(HEART, ACE),
	new Card(HEART, KING),
	new Card(HEART, QUEEN),
	new Card(HEART, JACK),
	new Card(HEART, TEN),
	new Card(HEART, NINE),
	new Card(HEART, EIGHT),
	new Card(HEART, SEVEN),
	new Card(HEART, SIX),
	new Card(HEART, FIVE),
	new Card(HEART, FOUR),
	new Card(HEART, THREE),
	new Card(HEART, TWO)
];

const TYPE_ORDER = [
	SPADE,
	CLUB,
	DIAMOND,
	HEART
];

const NUMBER_ORDER = [
	ACE,
	KING,
	QUEEN,
	JACK,
	TEN,
	NINE,
	EIGHT,
	SEVEN,
	SIX,
	FIVE,
	FOUR,
	THREE,
	TWO
];
