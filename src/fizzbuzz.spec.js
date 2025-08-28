import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("un numero no multiplo de 3 y 5", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

  it("un numero cualquiera que no es multiplo de 3 y 5", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });

  it("un numero multiplo de 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });

  it("cualquier numero multiplo de 3", () => {
    expect(fizzbuzz(9)).toEqual("Fizz");
  });

  it("un numero multiplo de 5", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });

  it("cualquier numero multiplo de 5", () => {
    expect(fizzbuzz(10)).toEqual("Buzz");
  });

  it("cualquier multiplo de 3 y 5", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });

});

