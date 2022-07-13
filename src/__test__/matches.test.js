const numero = (n) => n;

test("Meu primeiro teste", () => {
  expect(4 + 4).toBe(8);
});

test("Funcões mock", () => {
  const somar = jest.fn().mockImplementation((a, b) => a + b);

  let mockSomar = somar(2, 2);

  // aqui verificar se a função foi chamada pelo menos uma vez
  expect(somar).toHaveBeenCalled();
  // aqui verificar os parametros
  expect(somar).toHaveBeenCalledWith(2, 2);
  //verificando se a soma dos valores dão quatro
  expect(mockSomar).toBe(4);
});

test("Boolean", () => {
  let Booolean = null;

  //espero que ele seja nulo
  expect(Booolean).toBeNull();

  //espero que ele não seja undefined
  expect(Booolean).toBeDefined();

  //espero que ele seja undefined
  expect(Booolean).not.toBeUndefined();

  //espero que ele seja uma condição if que combina com verdadeiro
  expect(Booolean).not.toBeTruthy();

  //espero que ele seja uma condição if que combina com falso
  expect(Booolean).toBeFalsy();
});

test("Numbers", () => {
  let numeroParams = numero(2);

  // verificar se maior que 1
  expect(numeroParams).toBeGreaterThan(1);
  // verificar se ele e igual 2
  expect(numeroParams).toBeGreaterThanOrEqual(2);

  // se ele menor que dois
  //expect(numeroParams).toBeLessThan(2)

  //se ele menor ou igual dois
  expect(numeroParams).toBeLessThanOrEqual(2);

  //ele verificar se verdadeiro
  expect(numeroParams).toBe(2);

  //ele verificar se verdadeiro e igual
  expect(numeroParams).toEqual(2);
});

test("String", () => {
  let nome = "Gabriel";
  expect(nome).toMatch(/G/);
});

test("Arrays", () => {
  const shoppingList = [
    "fraldas",
    "kleenex",
    "sacos de lixo",
    "papel toalha",
    "leite",
  ];

  expect(shoppingList).toContain("leite");
});
