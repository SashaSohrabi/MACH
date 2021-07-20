<template>
  <div class="hello">
    <!-- The first option-->
    <!-- <div v-for="todo in todos.data" :key="todo.id">
      Id: {{ todo.id }} - Title: {{ todo.title }}
    </div>
    <hr />
    <br /> -->
    <!-- The second option -->
    <!-- <ApolloQuery
      :query="
        (gql) => gql`
          query {
            todos(options: { paginate: { page: 1 } }) {
              data {
                id
                title
              }
            }
          }
        `
      "
    > -->
    <!-- The third option -->
    <ApolloQuery
      :query="require('../graphql/allTodos.gql')"
      :variables="{ page }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
          <div v-for="todo in data.todos.data" :key="todo.id">
            Id: {{ todo.id }} - Title: {{ todo.title }}
          </div>
        </div>
        <div v-else>Loading...</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
// import gql from 'graphql-tag';
export default {
  data() {
    return {
      page: 5,
    };
  },
  // apollo: {
  //   todos: gql`
  //     query ToDos {
  //       todos(options: { paginate: { page: 1 } }) {
  //         data {
  //           id
  //           title
  //         }
  //       }
  //     }
  //   `,
  // },
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
</style>
