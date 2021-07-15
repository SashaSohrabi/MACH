<template>
  <div class="hello">
    <ApolloMutation
      :mutation="require('../graphql/createTodo.gql')"
      :variables="{ input }"
      @done="onDone"
    >
      <template v-slot="{ mutate, loading, error }">
        <form>
          <label for="title">Title</label>&nbsp;
          <input type="text" id="title" v-model="input.title" />&nbsp;
          <button :disabled="loading" @click="mutate()">Create a task</button>
        </form>

        <p v-if="error">An error occurred: {{ error }}</p>
        <p v-if="response">
          A new task with the id of "{{ response.id }}" and the title of "{{
            response.title
          }}" was created
        </p>
      </template>
    </ApolloMutation>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: {
        title: "",
        completed: false,
      },
      response: null,
    };
  },
  methods: {
    onDone(val) {
      this.response = val.data.createTodo;
      this.input.title = "";
    },
  },
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
