<template>
  <router-link :to="{ name: 'book', params: { id: '123' } }" v-if="bookData" class="book">
    <img class="book__image" :src="bookData.imageConnection.edges[0].node.url" :alt="bookData.title" />
    <h3 class="book__title">{{ bookData.title }}</h3>
  </router-link>
</template>

<script>
export default {
  name: 'SingleBook',
  props: {
    bookData: {
      type: Object,
      require: true
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.book {
  display: inline-block;
  border-radius: 20px;
  width: 220px;
  height: 300px;
  background: top center / contain no-repeat url(../assets/img/book-bg.png);
  margin: 50px;
  transition: all 0.3s;
}

.book:hover {
  transform: translateY(-10px) scale(1.05);
}

.book__image {
  box-shadow: 3px 3px 15px #000;
  padding-top: 70px;
}

.book__title {
  margin: 0;
  margin-top: 10px;
  font-size: 14px;
  color: rgb(204, 204, 204);
}

@media (max-width: 750px) {
  .book {
    width: 160px;
    height: 240px;
  }

  .book__image {
    padding-top: 40px;
  }
}
</style>
