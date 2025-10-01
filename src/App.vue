<script setup>
import Calculator from "./components/Calculator.vue";
import Result from "./components/Result.vue";
</script>

<template>
  <main>
    <div class="calculator-wrapper">
      <Calculator @handle-calculating="(inputs) => (x = inputs)" />
      <Result />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  max-width: 1440px;
  margin: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .calculator-wrapper {
    display: flex;
    background: var(--surface);
    border-radius: 1rem;
    overflow: hidden;
    max-width: 1000px;

    @media (max-width: 768px) {
      flex-direction: column;
      max-width: 100%;
      border-radius: 0;
    }
  }
}
</style>
