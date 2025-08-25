<script setup>
const props = defineProps(["icon"]);
</script>

<template>
  <button>
    <img class="icon" src="@/assets/images/icon-calculator.svg" alt="" />
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  background-color: var(--primary);
  color: var(--on-primary);
  border-radius: 25px;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  font-weight: 700;
  gap: 0.8rem;
  cursor: pointer;

  .icon {
    height: 15px;
  }
}
</style>
