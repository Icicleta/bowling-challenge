function ScoreCalculator () {

}

ScoreCalculator.prototype.calculateScores = function(strike, spare, amount) {
	
	if (strike) {

		//...

	} else if (spare) {

		//...

	} else {

		if (this.previousRoll !== null) {
			var result = amount + this.previousRoll;
			this.previousRoll = null;
			return result;
		} else {
			this.previousRoll = amount;
			return amount;
		}

	}

};