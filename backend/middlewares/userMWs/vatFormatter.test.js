const { vat } = require("./vatFormatter");

describe("Áfa százalék formázó tesztjei", () => {
  test("0 értékre", () => {
    expect(vat(0)).toEqual(0);
    expect(vat(0)).not.toEqual(!0);
  });
  test("negatív értékre", () => {
    expect(vat(-12)).toEqual(0);
    expect(vat(-12)).not.toEqual(-1.12);
  });

  test("helyes értékre", () => {
    expect(vat(27)).toEqual(1.27);
    expect(vat(27)).not.toEqual(1);
  });
  test("100 vagy nagyobb értékre", () => {
    expect(vat(100)).toEqual(0);
    expect(vat(101)).toEqual(0);
    expect(vat(101)).not.toEqual(!0);
  });
});
