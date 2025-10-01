<script setup>
import { ref } from "vue";
import MainButton from "./Button.vue";
import RadioButton from "./RadioButton.vue";
import { useResultStore } from "@/stores/useResult";

const store = useResultStore();

const error = ref(null);
const mortgage = ref({
  type: "repayment",
});

function calculate() {
  if (
    mortgage.value.amount &&
    mortgage.value.term &&
    mortgage.value.rate &&
    mortgage.value.type
  ) {
    store.calculateMortgage(
      mortgage.value.amount,
      mortgage.value.term,
      mortgage.value.rate,
      mortgage.value.type
    );
  } else {
    error.value = "Please enter all values";
    setTimeout(() => {
      error.value = null;
    }, 2000);
  }
}

function clear() {
  mortgage.value = { type: "repayment" };
  store.result = null;
}
</script>

<template>
  <section class="calculator-section">
    <div class="header">
      <h1>Mortgage Calculator</h1>
      <p @click="clear()">Clear All</p>
    </div>

    <div class="body">
      <div>
        <p class="label">Mortgage Amount</p>
        <div class="input">
          <i class="icon">$</i>
          <input type="number" v-model="mortgage.amount" />
        </div>
      </div>

      <div class="two-col">
        <div>
          <p class="label">Mortgage Term</p>
          <div class="input">
            <input type="number" v-model="mortgage.term" />
            <i class="icon">year</i>
          </div>
        </div>

        <div>
          <p class="label">Interest Rate</p>
          <div class="input">
            <input type="number" v-model="mortgage.rate" />
            <i class="icon">%</i>
          </div>
        </div>
      </div>

      <div class="one-col">
        <p class="label">Mortgage Type</p>

        <RadioButton
          title="Repayment"
          value="repayment"
          v-model="mortgage.type"
        />
        <RadioButton
          title="Interest Only"
          value="interest-only"
          v-model="mortgage.type"
        />
      </div>
    </div>

    <div class="error-wrap">
      <p v-if="error">{{ error }}</p>
    </div>

    <MainButton @click="calculate()">Calculate Repayment</MainButton>
  </section>
</template>

<style lang="scss" scoped>
.calculator-section {
  padding: 2rem;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }

  .error-wrap {
    position: relative;
    min-height: 1.5rem;

    p {
      color: var(--red);
      font-size: 0.8rem;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
      width: 100%;
      flex-direction: column;
    }

    h1 {
      font-size: 1rem;
      font-weight: 700;
    }

    p {
      font-size: 0.8rem;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    gap: 1rem;

    .two-col {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .one-col {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 0.5rem;
    }
  }
}

.input {
  display: flex;
  border: 1px solid var(--slate-900);
  border-radius: 0.3rem;
  overflow: hidden;

  &.full-row {
    width: 100%;
  }

  input {
    padding: 8px;
    width: 100%;
    font-weight: 700;
    color: var(--slate-900);
    border: none;
    outline: none;
  }

  // Hide arrows
  /* Chrome, Safari, Edge */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  .icon {
    background: var(--slate-100);
    color: var(--slate-900);
    font-size: 0.8rem;
    padding: 8px 10px;
    display: flex;
    font-weight: 600;
    min-width: 50px;
    align-items: center;
    justify-content: center;
    font-style: normal;

    &.error {
      background: var(--red);
      color: var(--white);
    }
  }

  &:focus-within {
    border-color: var(--lime);
  }

  &:focus-within .icon {
    background: var(--lime);
  }
}
</style>
