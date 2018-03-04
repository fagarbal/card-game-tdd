const SPADE   = new Spade();
const CLUB    = new Club();
const DIAMOND = new Diamond();
const HEART   = new Heart();

const ACE   = new Ace();
const KING  = new King();
const QUEEN = new Queen();
const JACK  = new Jack();
const TEN   = new Ten();
const NINE  = new Nine();
const EIGHT = new Eight();
const SEVEN = new Seven();
const SIX   = new Six();
const FIVE  = new Five();
const FOUR  = new Four();
const THREE = new Three();
const TWO   = new Two();

const TYPE_ORDER = [SPADE, CLUB, DIAMOND, HEART];

const NUMBER_ORDER = [ACE, KING, QUEEN, JACK, TEN, NINE, EIGHT, SEVEN, SIX, FIVE, FOUR, THREE, TWO];

const GAME_CARDS = [
	new Card(SPADE, ACE),   new Card(CLUB, ACE),   new Card(DIAMOND, ACE),   new Card(HEART, ACE),
	new Card(SPADE, KING),  new Card(CLUB, KING),  new Card(DIAMOND, KING),  new Card(HEART, KING),
	new Card(SPADE, QUEEN), new Card(CLUB, QUEEN), new Card(DIAMOND, QUEEN), new Card(HEART, QUEEN),
	new Card(SPADE, JACK),  new Card(CLUB, JACK),  new Card(DIAMOND, JACK),  new Card(HEART, JACK),
	new Card(SPADE, TEN),   new Card(CLUB, TEN),   new Card(DIAMOND, TEN),   new Card(HEART, TEN),
	new Card(SPADE, NINE),  new Card(CLUB, NINE),  new Card(DIAMOND, NINE),  new Card(HEART, NINE),
	new Card(SPADE, EIGHT), new Card(CLUB, EIGHT), new Card(DIAMOND, EIGHT), new Card(HEART, EIGHT),
	new Card(SPADE, SEVEN), new Card(CLUB, SEVEN), new Card(DIAMOND, SEVEN), new Card(HEART, SEVEN),
	new Card(SPADE, SIX),   new Card(CLUB, SIX),   new Card(DIAMOND, SIX),   new Card(HEART, SIX),
	new Card(SPADE, FIVE),  new Card(CLUB, FIVE),  new Card(DIAMOND, FIVE),  new Card(HEART, FIVE),
	new Card(SPADE, FOUR),  new Card(CLUB, FOUR),  new Card(DIAMOND, FOUR),  new Card(HEART, FOUR),
	new Card(SPADE, THREE), new Card(CLUB, THREE), new Card(DIAMOND, THREE), new Card(HEART, THREE),
	new Card(SPADE, TWO),   new Card(CLUB, TWO),   new Card(DIAMOND, TWO),   new Card(HEART, TWO)
];
