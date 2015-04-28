function RandomBowler() {

}

RandomBowler.prototype.randomiseThrow = function(pins) {

	return Math.floor(Math.random() * (pins + 1));

};