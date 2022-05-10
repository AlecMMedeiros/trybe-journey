const sum = require('./sum');

describe('Testes da Função sum', () => {
  // 1.1 - Teste se o retorno de sum(4, 5) é 9;
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  //1.2 Teste se o retorno de sum(0, 0) é 0
  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0,0)).toBe(0);
  });
  //1.3 Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)
  it('Teste se a função sum lança um erro com parâmetros 4 e "5"', () => {
    expect(() => sum(4,'5')).toThrow();    
  });
  //1.4 - Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
  it('Teste se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => sum(4,'5')).toThrow('parameters must be numbers');   
  });
});
