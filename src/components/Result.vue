<script setup>
import { useResultStore } from "@/stores/useResult";
import ResultPlaceHolder from "./ResultPlaceHolder.vue";
const store = useResultStore();
</script>

<template>
  <section class="result-section">
    <ResultPlaceHolder v-if="!store.result" />

    <div v-if="store.result" class="result">
      <div class="head">
        <h2>Your results</h2>
        <p>
          Your results are shown below based on the information you provided.
          Toadjust the results, edit the form and click “calculate repayments”
          again.
        </p>
      </div>

      <div class="result-card">
        <div class="card-inner">
          <p>Your monthly repayments</p>
          <i class="monthly-result">${{ store.result.result }}</i>

          <div class="hr-line"></div>

          <div v-if="store.result.total">
            <p>Total you'll repay over the term</p>
            <i class="total">${{ store.result.total }}</i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.result-section {
  width: 50%;
  padding: 2rem;
  background: var(--slate-900);
  color: var(--white);
  border-bottom-left-radius: 5rem;

  @media (max-width: 768px) {
    width: 100%;
    border-bottom-left-radius: 0;
  }

  .result {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .head {
      h2 {
        margin-bottom: 1rem;
      }
      p {
        font-size: 0.9rem;
        color: var(--slate-300);
      }
    }

    .result-card {
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
          width: 100%;
          font-weight: 700;
          white-space: wrap;
        }

        .total {
          font-weight: 700;
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
