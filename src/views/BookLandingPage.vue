<template>
  <div class="book-page">
    <router-link to="/" class="book-page__back-button">Back</router-link>
    <css-spinner v-if="!book.title" class="book-page__spinner"></css-spinner>
    <div v-else class="book-page__content">
      <img :src="book.imageUrl" :alt="book.title" class="book-page__image" />
      <div class="book-page__text-wrapper">
        <h2 class="book-page__title">{{ book.title }}</h2>
        <p>
          by
          <span class="book-page__author">{{ book.author }}</span>
        </p>
        <p class="book-page__description">{{ book.description }}</p>
        <span class="book-page__pages">{{ book.numberOfPages }} pages</span>
      </div>
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
    console.log(process.env.API_KEY, process.env.DELIVERY_TOKE, process.env.ENVIRONMENT_NAME);
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
.book-page__content {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
.book-page__image {
  max-width: 320px;
  box-shadow: 0 1rem 2rem rgb(0 0 0 / 90%);
  margin-right: 30px;
}
.book-page__text-wrapper {
  background: rgba(255, 255, 255, 0.5);
  width: 60%;
  padding: 30px;
  border-radius: 30px;
}
.book-page__author {
  font-size: 20px;
  font-weight: bold;
  color: #007185;
}
.book-page__description {
  font-size: 18px;
  text-align: left;
  line-height: 1.3;
}
.book-page__back-button {
  text-decoration: none;
  height: 38px;
  width: 90px;
  color: #5095f5;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 30px;
  right: 15px;
  line-height: 38px;
}

.book-page__back-button::before {
  content: '';
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  position: absolute;
  top: 50%;
  left: -10px;
  transform: translateY(-50%);
  border-right: 10px solid rgba(0, 0, 0, 0.5);
}
.book-page__back-button:hover {
  background-color: rgba(0, 0, 0, 0.4);
}

.book-page__back-button:hover::before{
  border-right: 10px solid rgba(0, 0, 0, 0.4);
}
@media (max-width: 750px) {
  .book-page__content {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .book-page__image {
    margin: 0 0 30px 0;
      max-width: 220px;
  }
  .book-page__text-wrapper {
    width: 90%;
  }
}
</style>
