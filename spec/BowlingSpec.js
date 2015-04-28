describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  // describe('number of frame', function() {
  //   it('has 1 frame', function() {
  //     expect(bowling.frameNumber).toBe(1);
  //   });
  // });

  describe('number of ball', function() {
    describe('is 1', function() {
      it('then number of pins knocked down has to be less than 11', function() {
        expect(bowling.pinsKnocked(10)).toBeLessThan(11);
      });

      describe('and number of pins down is 10', function() {
        beforeEach(function() {
          spyOn(bowling, 'pinsKnocked').and.returnValue(10);
          bowling.ballOne();
        });

        it('then pins left are 0', function(){
          expect(bowling.pinsLeft).toBe(0);
        });

        it('roll is Strike and score is 10', function(){
          expect(bowling.firstPart()).toEqual("strike");
        });

        it('score is 10', function() {
          expect(bowling.frameScore()).toEqual(10);
        });
      });

      describe('and number of pins down is less than 10', function() {
        beforeEach(function() {
          spyOn(bowling, 'pinsKnocked').and.returnValue(5);
        });

        it('the frame continues', function(){
            expect(bowling.firstPart()).toEqual("continue");
        });
      });
    });

    describe('is 2', function() {

      beforeEach(function(){
        spyOn(bowling, 'ballOne').and.returnValue(6);
      });

      it('then number of pins knocked down has to be less than pins left in ball 1', function() {
        pinsLeft = bowling.startPins - bowling.ballOne();
        expect(bowling.pinsKnocked(pinsLeft)).toBeLessThan(5);
      });

      beforeEach(function(){
        spyOn(bowling, 'firstPart').and.returnValue("continue");
      });

      describe('and number of pins knocked down plus number of pins knocked by ball 1 is 10,', function(){

        beforeEach(function() {
          spyOn(bowling, 'secondPart').and.returnValue(0);
        });

        it('roll is a Spare', function() {
          bowling.thirdPart();
          expect(bowling.message).toEqual("spare");
        });

        it('frame score is 10', function() {
          expect(bowling.frameScore()).toEqual(10);
        });
      });

      describe('and number of pins knocked down plus number of pins knocked by ball 1, is less than 10', function(){

        beforeEach(function() {
          spyOn(bowling, 'secondPart').and.returnValue(3);
        });

        it('roll is open frame', function(){
          expect(bowling.thirdPart()).toEqual("open");
        });

        it('frame score is the sum of pins knocked down in both balls', function(){
          expect(bowling.frameScore()).toEqual(7);
        });
      });
    });
  });
});
