<template>
  <div class="home">
    <ApolloMutation />
  </div>
</template>

<script>
// @ is an alias to /src
import ApolloMutation from "@/components/ApolloMutation.vue";

export default {
  name: "MutationExample",
  components: {
    ApolloMutation,
  },
};
</script>
