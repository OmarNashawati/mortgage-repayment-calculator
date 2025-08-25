<script setup>
import { ref } from "vue";

const emit = defineEmits(["data"]);

const props = defineProps([
  "label",
  "icon",
  "iconDirection",
  "placeholder",
  "type",
  "size",
]);

const inputValue = ref("");

const update = () => {
  emit("data", inputValue.value);
  // inputValue.value = "";
};
</script>

<template>
  <div>
    <p class="label">{{ label }}</p>
    <div class="input" :class="size">
      <i v-if="icon && iconDirection === 'left'" class="icon">{{ icon }}</i>
      <input :type="type" v-model="inputValue" @input="update" />
      <i v-if="icon && iconDirection === 'right'" class="icon">{{ icon }}</i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  }

  .icon {
    background: var(--slate-100);
    color: var(--slate-700);
    font-size: 0.8rem;
    padding: 8px 10px;
    display: flex;
    font-weight: 600;
    align-items: center;
    justify-content: center;
  }
}
</style>
