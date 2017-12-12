const expect = require('chai').expect;

const calc = require('./calculator');

describe('Calculator', function(){

    // smoke test
    context('smoke tests', function(){
      it('should exists the Calculator lib', function(){
        expect(calc).to.exist;
      });

      it('should exists method sum', function(){

      });
    });
});