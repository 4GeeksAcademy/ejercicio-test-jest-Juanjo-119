const oneEuroIs = {
  USD: 1.07,
  JPY: 156.5,
  GBP: 0.85,
};

const fromEuroToDollar = (euro) => euro * oneEuroIs.USD;

const fromDollarToYen = (dollar) => (dollar / oneEuroIs.USD) * oneEuroIs.JPY;

const fromYenToPound = (yen) => (yen / oneEuroIs.JPY) * oneEuroIs.GBP;

module.exports = { oneEuroIs, fromEuroToDollar, fromDollarToYen, fromYenToPound };