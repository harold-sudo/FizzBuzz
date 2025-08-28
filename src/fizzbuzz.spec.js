import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("un numero no multiplo de 3 y 5", () => {
    expect(fizzbuzz("1")).toEqual("1");
  });

  it("un numero cualquiera que no es multiplo de 3 y 5", () => {
    expect(fizzbuzz("2")).toEqual("2");
  });

});

