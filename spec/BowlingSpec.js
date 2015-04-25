describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('number of frame', function() {
    it('has 1 frame', function() {
      expect(bowling.frameNumber).toBe(1);
    });
  });

  describe('number of ball', function() {
    describe('is One', function() {
      it('then number of pins knocked down has to be less than 11', function() {
        expect(bowling.pinsKnocked(10)).toBeLessThan(11);
      });

      describe('and number of pins down is 10', function(){

        it('then pins left are 0', function(){
          spyOn(bowling, 'pinsKnocked').and.returnValue(10);
          expect(bowling.ballOne()).toBe(0);
        });

        it('roll is Strike and frame is over', function(){
          spyOn(bowling, 'ballOne').and.returnValue(0);
          expect(bowling.gameFrame()).toEqual("Strike, frame is over");
          expect(bowling.frameScore()).toEqual(10);
        });
      });

      describe('and number of pins down is less than 10', function(){

        it('the frames continues', function(){
          spyOn(bowling, 'ballOne').and.returnValue(6);
          expect(bowling.gameFrame()).toEqual("Frame continues");
        });

        it('then pins left are 10 minus pins knocked down', function(){
          spyOn(bowling, 'pinsKnocked').and.returnValue(6);
          expect(bowling.ballOne()).toBe(4);
        });
      });
    });

    describe('is 2', function() {
      it('then number of pins knocked down has to be less than pins left in ball 1', function() {
        spyOn(bowling, 'ballOne').and.returnValue(6);
        pinsLeft = 10 - bowling.ballOne();
        expect(bowling.pinsKnocked(pinsLeft)).toBeLessThan(5);
      });

      it('and number of pins knocked down plus number of pins knocked by ball 1, is 10', function() {
        spyOn(bowling, 'ballOne').and.returnValue(6);
        spyOn(bowling, 'ballTwo').and.returnValue(0);
        expect(bowling.gameFrame()).toEqual("Spare, frame is over");
      });
    });
  });
});
