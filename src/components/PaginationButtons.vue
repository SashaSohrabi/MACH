<template>
  <div class="buttons-wrapper">
    <pagination-button label="Previous" :disabled="!hasPreviousPage" @handlePagination="handlePagination" class="prev-btn"></pagination-button>
    <pagination-button label="Next" :disabled="!hasNextPage" @handlePagination="handlePagination" class="next-btn"></pagination-button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import PaginationButton from '@/components/PaginationButton.vue';

export default {
  name: 'PaginationButtons',
  components: {
    PaginationButton
  },
  props: {
    totalBooksCount: {
      type: Number,
      required: true
    }
  },
  created() {
    this.$store.commit('setTotalBooksCount', this.totalBooksCount);
  },
  computed: {
    ...mapGetters(['hasPreviousPage', 'hasNextPage'])
  },
  methods: {
    ...mapMutations(['goToTheNextPage', 'goToThePreviousPage']),
    handlePagination(btnLabel) {
      if (btnLabel === 'Next') {
        this.goToTheNextPage();
        return;
      }

      this.goToThePreviousPage();
    }
  }
};
</script>

<style scoped>
.prev-btn,
.next-btn {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
}

.prev-btn {
  left: 15px;
}

.next-btn {
  right: 15px;
}

[disabled] {
  color: #1b447e;
  cursor: not-allowed;
}

@media (max-width: 750px) {
  .prev-btn {
    left: 10px;
  }

  .next-btn {
    right: 10px;
  }
}
</style>
