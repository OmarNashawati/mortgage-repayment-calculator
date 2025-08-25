import { defineStore } from "pinia";
import { ref } from "vue";

export const useResultStore = defineStore("result", () => {
  const mortgageInputs = reactive({
    amount,
    term,
    rate,
    type,
  });
  const monthlyRepayment = ref(0);
  const totalRepay = ref(0);
  const interestOnlyMortgage = ref(0);

  return {
    mortgageInputs,
  };
});
