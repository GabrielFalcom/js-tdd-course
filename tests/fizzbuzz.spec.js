import { expect } from 'chai';
// eslint-disable-next-line object-curly-newline
import FizzBuzz from '../src/fizzBuzz';

/*
  Se o número for divisivel por 3, no lugar do numero escreva 'Fizz'
  Se o número for divisivel por 5, no lugar do numero escreva 'Buzz'
  Se o número for divisivel por 3 e 5, no lugar do numero escreva 'FizzBuzz'
  Se não for multiplo de nada, retorna o numero.
*/

describe('FizzBuzz', () => {
  it('should return `Fizz` when multipe of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
    expect(FizzBuzz(9)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multipe of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
    expect(FizzBuzz(20)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multipe of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
    expect(FizzBuzz(30)).to.be.equal('FizzBuzz');
    expect(FizzBuzz(60)).to.be.equal('FizzBuzz');
  });

  it('should return the number when non-multiple', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
    expect(FizzBuzz(13)).to.be.equal(13);
    expect(FizzBuzz(29)).to.be.equal(29);
  });

  it('should return 0 when number equal 0', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});
