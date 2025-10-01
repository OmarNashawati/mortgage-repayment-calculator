<script setup>
const props = defineProps(["title", "value", "modelValue"]);
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <label class="radio" :class="{ selected: modelValue === value }" :for="value">
    <input
      type="radio"
      :value="value"
      :checked="modelValue === value"
      :id="value"
      @change="emit('update:modelValue', value)"
    />
    <span class="radio__custom"></span>
    {{ title }}
  </label>
</template>

<style lang="scss" scoped>
// label {
//   border-radius: 0.5rem;
//   padding: 8px;
//   font-weight: 700;
//   border: 1px solid var(--slate-900);

//   &.selected {
//     border: 1px solid var(--lime);
//     background: hsla(61, 70%, 52%, 0.2);
//   }
// }

.radio {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  user-select: none;
  border-radius: 0.5rem;
  padding: 8px;
  font-weight: 700;
  border: 1px solid var(--slate-500);
  cursor: pointer;

  &.selected {
    border: 1px solid var(--lime);
    background: hsla(61, 70%, 52%, 0.2);

    .radio__custom {
      border-color: var(--lime);
    }
  }

  input[type="radio"] {
    display: none; // hide native radio
  }

  &__custom {
    width: 18px;
    height: 18px;
    border: 2px solid var(--slate-500);
    border-radius: 50%;
    position: relative;
    transition: all 0.2s ease;

    // inner circle
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      background: var(--lime);
      border-radius: 50%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.2s ease;
    }
  }

  // when checked, show inner circle
  input[type="radio"]:checked + .radio__custom::after {
    transform: translate(-50%, -50%) scale(1);
  }

  // hover effect
  &:hover .radio__custom {
    border-color: var(--slate-900);
  }
}
</style>
