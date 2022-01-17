<template>
  <div class="book-page">
    <router-link to="/" class="book-page__back-button">Back</router-link>
    <css-spinner v-if="!book.title" class="book-page__spinner"></css-spinner>
    <div class="book-page__content">
      <img :src="book.imageUrl" :alt="book.title" class="book-page__image" />
      <h2 class="book-page__title">{{ book.title }}</h2>
      <p>
        <span class="book-page__author">by {{ book.author }}</span> <span class="book-page__pages">{{ book.numberOfPages }} pages</span>
      </p>
      <p class="book-page__description">{{ book.description }}</p>
    </div>
  </div>
</template>

<script>
import CssSpinner from '@/components/CssSpinner.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'BookLandingPage',
  components: {
    CssSpinner
  },
  created() {
    const uid = this.$route.params.id;
    this.fetchSingleBook(uid);
  },
  computed: {
    ...mapGetters({
      book: 'getSingleBookData'
    })
  },
  methods: {
    ...mapActions(['fetchSingleBook'])
  },
  destroyed() {
    this.$store.commit('deleteBookData');
  }
};
</script>

<style scoped>
.book-page {
  padding: 50px;
}
.book-page__image {
  max-width: 320px;
  float: left;
}
</style>
