<script setup>
import { ref } from "vue";

const showResult = ref(true);
</script>

<template>
  <section class="result-section">
    <div v-if="!showResult" class="empty">
      <img src="@/assets/images/illustration-empty.svg" alt="" />
      <p class="title">Results shown here</p>
      <p class="desc">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>

    <div v-if="showResult" class="result">
      <h2>Your results</h2>

      <p>
        Your results are shown below based on the information you provided.
        Toadjust the results, edit the form and click “calculate repayments”
        again.
      </p>

      <div class="card-outer">
        <div class="card-inner">
          <p>Your monthly repayments</p>
          <i class="monthly-result">$1,797.74</i>

          <div class="hr-line"></div>

          <p>Total you'll repay over the term</p>
          <i class="total">$539,797.74</i>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.result-section {
  width: 50%;
  padding: 1rem;
  background: var(--slate-900);
  color: var(--white);
  border-bottom-left-radius: 5rem;

  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    border-bottom-left-radius: 0;
  }

  .empty {
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
    }
  }
}

.result {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    color: var(--slate-300);
  }
  .card-outer {
    background: var(--lime);
    padding-top: 6px;
    border-radius: 0.5rem;
    box-shadow: 4px 4px 8px rgba($color: #000000, $alpha: 0.1);
    .card-inner {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      border-radius: 0.3rem;
      padding: 1rem;
      background: var(--slate-1000);

      .monthly-result {
        color: var(--lime);
        font-size: 3rem;
        font-weight: 700;
      }

      .total {
        font-weight: 700;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
