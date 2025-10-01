import { defineStore } from "pinia";
import { ref } from "vue";

export const useResultStore = defineStore("result", () => {
  const result = ref(null);

  const calculateMortgage = (amount, term, rate, type) => {
    if (type === "repayment") {
      result.value = monthlyRepayment(amount, rate, term);
    } else {
      result.value = intrestOnly(amount, rate);
    }
  };

  function monthlyRepayment(amount, rate, term) {
    const i = rate / (100 * 12);
    const n = term * 12;
    const result =
      (amount * (i * Math.pow(1 + i, n))) / (Math.pow(1 + i, n) - 1);
    const total = result * n;
    return { result: result.toFixed(2), total: total.toFixed(2) };
  }

  function intrestOnly(amount, rate) {
    const i = rate / (100 * 12);
    return { result: (amount * i).toFixed(2) };
  }

  return {
    result,
    calculateMortgage,
  };
});
