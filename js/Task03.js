function calculate (sum, count, promocode, promocode2) {
  let discount = 0;
  let excessAmount = 0;
  let amountDiscount = 0;
  let discountPromocode = 0
  let discountPromocode2 = 0;

  if (sum > 10) {
    discount = count * 0.03;
    console.log(`применяется скидка 3% - ${discount} рублей`)
  } else {
    console.log('не применяется скидка 3%')
  }

  if (count > 30000) {
    excessAmount = count - 30000;
    amountDiscount = excessAmount * 0.15;
    console.log(`применяется скидка - 15% - ${amountDiscount} рублей`);
  } else {
    console.log('не применяется скидка 15%');
  }

  if (promocode === 'METHED') {
    discountPromocode = count * 0.1;
    console.log(`применяется скидка ${discountPromocode} рублей по промокоду METHED`)
  } else {
    console.log('не применяется скидка по промокоду')
  }

  const totalDiscount = discount + amountDiscount + discountPromocode;

  if (promocode2 === 'G3H2Z1' && totalDiscount > 2000) {
    discountPromocode2 = 500;
    console.log(`применяется скидка ${discountPromocode2} рублей по промокоду G3H2Z1`)
  } else {
    console.log('не применяется скидка по промокоду G3H2Z1');
  }
}

calculate(10, 30000, 'METHED','G3H2Z1');