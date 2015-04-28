function Bowling() {
	this.defaultPins = 10;
	this.turn = 0;
	this.scores = {
		"1": [],
		"2": [],
		"3": [],
		//...
	};
}

Bowling.prototype.rollBall = function(pins) {

	this.turn++;

	var randomBowler = new RandomBowler;
	var pinsDowned = randomBowler.randomiseThrow(pins);
	this.remainingPins = this.defaultPins - pinsDowned;

	var scoreCalculator = new ScoreCalculator;

	if(remainingPins > 0) {
		if (turn%2 === 0) {
			return pinsDowned;
		} else {
			return scoreCalculator.calculateScores(false, false, pinsDowned);
		};

	} else {
		if (turn%2 === 0) {
			// SPARE!
			this.spare = true;
		} else {
			// STRIKE!
			this.strike = true;
		};
	};

	return scoreCalculator.calculateScores(this.strike, this.spare, pinsDowned);

	// ...
	// ...
	// ...

};

Bowling.prototype.endGame = function() {
	console.log("Ended game");
};