const fromDollarToYen = (dollar) => {
    const rate = 156.5;
    return dollar * rate;
};

const fromEuroToDollar = (euro) => {
    const rate = 1.07;
    return euro * rate;
};

const fromYenToPound = (yen) => {
    const rate = 0.87;
    return yen * rate;
};

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };