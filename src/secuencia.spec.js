import secuencia from "./secuencia";

describe("Secuencia FizzBuzz", () => {
  it("dado un numero devolver la secuencia hasta el numero", () => {
    expect(secuencia(4)).toEqual("1, 2, Fizz, 4");
  });
});