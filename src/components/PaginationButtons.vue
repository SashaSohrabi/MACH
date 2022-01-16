<template>
  <div class="buttons-wrapper">
    <pagination-button label="Previous Page" :disabled="!hasPreviousPage" @handlePagination="handlePagination"></pagination-button>
    <pagination-button label="Next Page" :disabled="!hasNextPage" @handlePagination="handlePagination"></pagination-button>
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
      if (btnLabel === 'Next Page') {
        this.goToTheNextPage();
        return;
      }

      this.goToThePreviousPage();
    }
  }
};
</script>
