const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require("./app");

test("Convierte 1 dólar a yenes", () => {
    expect(fromDollarToYen(1)).toBeCloseTo(156.5);
});

test("Convierte 5 dólares a yenes", () => {
    expect(fromDollarToYen(5)).toBeCloseTo(782.5);
});

test("Convierte 1 euro a dólares", () => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.07);
});

test("Convierte 10 euros a dólares", () => {
    expect(fromEuroToDollar(10)).toBeCloseTo(10.7);
});

test("Convierte 100 yenes a libras", () => {
    expect(fromYenToPound(100)).toBeCloseTo(87);
});

test("Convierte 1000 yenes a libras", () => {
    expect(fromYenToPound(1000)).toBeCloseTo(870);
});