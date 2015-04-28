function Bowling() {
  this.frameNumbers = 1;
  this.startPins = 10;
  this.score = 0;
  this.pinsLeft = 10;
}

Bowling.prototype.pinsKnocked = function(pins) {
  var range = pins + 1;
  return Math.floor(Math.random() * range);
};

Bowling.prototype.ballOne = function() {
  var pinsDown = this.pinsKnocked(this.startPins);
  return this.pinsLeft = this.startPins - pinsDown;
};

Bowling.prototype.ballTwo = function() {
  var pinsDown = this.pinsKnocked(this.pinsLeft);
  return this.pinsLeft = this.pinsLeft - pinsDown;
};

// 'rolling loop'

Bowling.prototype.firstPart = function(){
  this.ballOne();
  if (this.pinsLeft === 0) {
    this.result = "strike";
  } else {
    this.result = "continue";
  };
  return this.result;
};

Bowling.prototype.secondPart = function(){
  if (this.result === "continue") {
    this.ballTwo();
  };
};

Bowling.prototype.thirdPart = function() {
  if (this.secondPart() === 0){
    this.message = "spare";
  } else {
    this.message = "open";
  };
  return this.message;
};

// END 'rolling loop'

Bowling.prototype.frameScore = function() {
  if (this.firstPart() === "strike") {
    return this.score = 10;
  } else {
    if (this.thirdPart() === "spare") {
      this.score = 10;
    } else {
      this.score = this.startPins - this.secondPart();
    };
  };
  return this.score;
};
