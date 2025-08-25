export function monthlyRepaymentMortgage(amount, rate, term) {
  const i = rate / (100 * 12);
  const n = term * 12;
  console.log(i);
  console.log(n);
  const result = (amount * (i * Math.pow(1 + i, n))) / (Math.pow(1 + i, n) - 1);
  const total = result * n;
  return { result, total };
}

export function intrestOnlyMortgage(amount, rate) {
  const i = rate / (100 * 12);
  return amount * i;
}
