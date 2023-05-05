"use strict";
const totalPrice = (arg) => {
    let monthPay = 0;
    if (arg.isInstallment && arg.months === 12)
        monthPay = (arg.price - (arg.price * arg.discount) / 100) / arg.months;
    return monthPay;
};
console.log(totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 }));
// totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
// 6250
