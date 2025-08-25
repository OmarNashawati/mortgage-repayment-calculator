<script setup>
import Calculator from "./Calculator.vue";
import Result from "./Result.vue";
</script>

<template>
  <div class="calculator-wrapper">
    <Calculator />
    <Result />
  </div>
</template>

<style lang="scss" scoped>
.calculator-wrapper {
  display: flex;
  background: var(--surface);
  border-radius: 1rem;
  overflow: hidden;
  max-width: 800px;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
    border-radius: 0;
  }
}
</style>
