<template>
  <div>
    <css-spinner></css-spinner>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
import CssSpinner from '@/components/CssSpinner.vue';
export default {
  name: 'BookLandingPage',
  components: {
    CssSpinner
  }
};
</script>

<style></style>
