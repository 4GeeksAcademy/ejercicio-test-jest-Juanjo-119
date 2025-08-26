const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require("./app");

test("EUR → USD", () => {
  expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
  expect(fromEuroToDollar(10)).toBeCloseTo(10.7);
});

test("USD → YEN vía EUR", () => {
  expect(fromDollarToYen(1)).toBeCloseTo(146.26168, 5);
  expect(fromDollarToYen(5)).toBeCloseTo(731.30841, 5);
});

test("YEN → GBP vía EUR", () => {
  expect(fromYenToPound(100)).toBeCloseTo(0.54313, 5);
  expect(fromYenToPound(1000)).toBeCloseTo(5.43131, 5);
});