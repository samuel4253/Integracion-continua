const holaMundo = require('./index');

test('devuelve "Hola, Mundo!"', () => {
    expect(holaMundo()).toBe("Hola, Mundo!");
});
