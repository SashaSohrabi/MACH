<template>
  <button :disabled="disabled" @click="clicked(label)">{{ label }}</button>
</template>

<script>
export default {
  name: 'PaginationButton',
  props: {
    label: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    clicked(label) {
      this.$emit('handlePagination', label)
    }
  }
};
</script>

<style></style>
