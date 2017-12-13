import { expect } from 'chai';
import { sum, sub, mult, div } from './calculator';

//const expect = require('chai').expect;
//const calc = require('./calculator');

describe('Calculator', () => {

    // smoke test
    context('smoke tests', () =>{

      it('should exists method sum', () =>{
        expect(sum).to.exist;
        expect(sum).to.be.a('function'); 
      });

      it('should exists method sub', () => {
        expect(sub).to.exist;
        expect(sub).to.be.a('function');
      });

      it('should exists method mult', () => {
        expect(mult).to.exist;
        expect(mult).to.be.a('function');
      });

      it('should exists method div', () => {
        expect(div).to.exist;
        expect(div).to.be.a('function');
      });
    });

    describe('Sum', () =>{
      it('should return 4 when `sum(2,2)`', () =>{
        expect(sum(2,2)).to.be.equals(4);
      });
    });

    describe('Sub', () =>{
      it('should return 6  when `sub(8,2)`', () =>{
        expect(sub(8,2)).to.be.equals(6);
      });

      it('should return -1 when `sub(2,3)`', () =>{
        expect(sub(2,3)).to.be.equals(-1);
      })
    });

    describe('Mult', () =>{
      it('should return 10 when `mult(5,2)`', () =>{
        expect(mult(5, 2)).to.be.equals(10);
      })
    });

  describe('Div', () => {
    it('should return 2.5 when `div(5,2)`', () => {
      expect(div(5, 2)).to.be.equals(2.5);
    });

    it('should `division by zero` when `div(2,0)`', () =>{
      expect(div(2,0)).to.be.equals('division by zero');
    })
  });
});