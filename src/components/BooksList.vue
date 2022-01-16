<template>
  <div class="hello">
    <ApolloQuery :query="require('../graphql/allBooks.gql')" :variables="{ numberOfLists, numberOfBooksPerPage, skipBook }">
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <single-book v-for="(book, indx) in data.all_books_list.items[0].book_listsConnection.edges" :key="indx" :bookData="book.node"></single-book>
          <pagination-buttons :totalBooksCount="data.all_books_list.items[0].book_listsConnection.totalCount"></pagination-buttons>
        </div>
        <css-spinner v-else></css-spinner>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CssSpinner from '@/components/CssSpinner.vue';
import SingleBook from '@/components/SingleBook.vue';
import PaginationButtons from '@/components/PaginationButtons.vue';

export default {
  name: 'BookList',
  components: {
    CssSpinner,
    SingleBook,
    PaginationButtons
  },
  computed: {
    ...mapGetters({
      numberOfLists: 'getNumberOfLists',
      numberOfBooksPerPage: 'getNumberOfBooksPerPage',
      skipBook: 'getSkipBook'
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.result {
  width: 80%;
  margin: auto;
  text-align: center;
}
</style>
