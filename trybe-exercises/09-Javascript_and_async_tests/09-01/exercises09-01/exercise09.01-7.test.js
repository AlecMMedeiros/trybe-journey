const uppercase = require('../exercises09-01/exercise09-01-7.js');

test('Testando asyncSum, soma 5 mais 10', (done) => {
  const toTest = 'test';
  function callback(toTest) {
    try {
      expect(toTest).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  }
  uppercase(toTest, callback);
});
