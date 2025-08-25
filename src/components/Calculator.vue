<script setup>
import MainButton from "./Button.vue";
import mInput from "./Input.vue";

let amount = 0;
let term = 0;
let rate = 0;
let type = "repayment";
</script>

<template>
  <section class="calculator-section">
    <div class="header">
      <h1>Mortgage Calculator</h1>
      <p>Clear All</p>
    </div>

    <div class="body">
      <mInput
        label="Mortgage Amount"
        icon-direction="left"
        icon="$"
        type="number"
        size="full-row"
        @data="(data) => (amount = data)"
      />

      <div class="two-col-container">
        <mInput
          label="Mortgage Term"
          icon-direction="right"
          icon="year"
          type="number"
          @data="(data) => (term = data)"
        />
        <mInput
          label="Interest Rate"
          icon-direction="right"
          icon="%"
          type="number"
          @data="(data) => (rate = data)"
        />
      </div>

      <div class="one-col-container">
        <p class="label">Mortgage Type</p>
        <label for="repayment">
          <input
            v-model="type"
            type="radio"
            id="repayment"
            name="mortgage-type"
            value="repayment"
          />
          Repayment
        </label>

        <label for="interest-only">
          <input
            v-model="type"
            type="radio"
            id="interest-only"
            name="mortgage-type"
            value="interestOnly"
          />
          Interest Only
        </label>
      </div>
    </div>

    <MainButton @click="console.log(amount, term, rate, type)">
      Calculate Repayment
    </MainButton>
  </section>
</template>

<style lang="scss" scoped>
.calculator-section {
  padding: 2rem 2rem;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
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

    .two-col-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .one-col-container {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 0.5rem;

      label {
        border-radius: 0.5rem;
        padding: 8px;
        font-weight: 700;
        border: 1px solid var(--slate-900);
      }
    }
  }
}
</style>
