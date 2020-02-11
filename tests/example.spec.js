// Describe: O papel do Describe é separar os metodos/classes,
// assim indicando qual componente está sendo testado
// e qual método desse componente também está sendo testado. Pode ser aninhado.

// Context: Tem o mesmo comportamento do describe e será utilizado como contexto do describe.
// Fornece uma maneira de manter os testes mais fáceis de ler e organizar.
// Assim evita varios describes aninhados com má semantica e legibilidade.

// It: Caso de teste.

// Only: Somente aquele atribuido será executado. Absoluto sobre outras acoes.

// Skip: Pula aquele atribuido.

// Before: Roda uma vez, antes do bloco

// After: Roda uma vez, depois do bloco

// BeforeEach: Roda todas as vezes, antes de CADA bloco

// AfterEach: Roda todas as vezes, depois de CADA bloco


// Command-Line Usage:
// --bail, -b   Abort ("bail") after first test failure

const { expect } = require('chai');

describe.skip('Describe_Context_It', () => {
  describe('Method ', () => {
    context.skip('Case 1', () => {
      it('should happen blabla', () => {
        // espera que aconteca
        // Entra de dados / metodo sum(2,2)
        // Espera retornar (4) => true | (3) => false => broken test
        throw new Error('just an error');
      });
    });

    context('Case 2', () => {
      it('should happen blabla', () => {
        // Exemplo de lancamento de rro
        throw new Error('just an error');
      });

      it('should happen mimimi', () => {
        // espera que aconteca
        // Entra de dados / metodo sum(2,2)
        // Espera retornar (4) => true | (3) => false => broken test
      });
    });
  });
});

describe.skip('Hooks', () => {
  before(() => {
    console.log('before');
  });

  after(() => {
    console.log('after');
  });

  beforeEach(() => {
    console.log('beforeEach');
  });

  afterEach(() => {
    console.log('afterEach');
  });

  it('test hook 1', () => {
    console.log('test hook 1');
  });

  it('test hook 2', () => {
    console.log('test hook 2');
  });
});

describe.skip('Chai', () => {
  let arr;

  beforeEach(() => {
    arr = [1, 2, 3];
  });

  // Smoke Test: Testar tipos ou se existe
  it('should be an array', () => {
    expect(arr).to.be.a('array');
  });

  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should have a size of 2 when pop a value to the array', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });

  it('should remove the value 3 when  use pop in the array', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should return true when pop 3 from the array', () => {
    expect(arr.pop() === 3).to.be.true;
  });
});
