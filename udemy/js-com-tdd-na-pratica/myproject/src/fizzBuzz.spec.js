import { expect } from 'chai';
import FizzBuzz from './fizzBuzz';

describe('FizBuzz', () =>{

  it('should return `Fizz` when multiple of 3', ()=>{
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });
  it('should return `Buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 15', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('should return the number 4 when non-multiple', () => {
    expect(FizzBuzz(4)).to.be.equal(4);
  });

  it('should return 0 when number is 0', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
})