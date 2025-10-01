<template>
  <div v-if="true" class="result-place-holder">
    <img src="@/assets/images/illustration-empty.svg" alt="" />
    <p class="title">Results shown here</p>
    <p class="desc">
      Complete the form and click “calculate repayments” to see what your
      monthly repayments would be.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.result-place-holder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;

  img {
    max-width: 50%;
  }

  .title {
    font-weight: 600;
    font-size: 1rem;
  }
  .desc {
    font-size: 0.8rem;
    font-weight: 300;
    opacity: 0.85;
    color: var(--slate-100);
  }
}
</style>
