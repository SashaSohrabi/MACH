<template>
  <div v-if="bookData">
    {{ bookData }}
    <!-- <router-link :to="{ name: 'book', params: { id: '123' } }">Click</router-link> -->
  </div>
</template>

<script>
export default {
  name: 'SingleBook',
  props: {
    bookData: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style></style>
