describe('Bowling', function() {

	var bowling;

	beforeEach(function() {

		bowling = new Bowling;

	});

	// RandomBowler.js
	describe("Random behaviour", function() {
		it("rolls a random ball", function() {

		});
	});

	// Bowling.js
	describe("Game loop", function() {
		it("rolls the first ball", function() {

		});

		it("rolls the second ball", function() {

		});

		it("rolls a third ball if there is a spare in the final frame", function() {

		});

	});

	// ScoreCalculator.js
	describe("score calculator", function() {
		it("calculates two non-strike, non-spare consecutive rolls correctly", function() {

		});

		it("adds the next roll to a spare", function() {

		});

		it("adds the next two rolls to a strike", function() {

		});
	});

});