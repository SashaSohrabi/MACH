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
      this.$emit('handlePagination', label);
    }
  }
};
</script>

<style scoped>
button {
  background: none repeat scroll 0 0 transparent;
  border: medium none;
  border-spacing: 0;
  color: #5095f5;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: 'PT Sans Narrow', sans-serif;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.42rem;
  list-style: none outside none;
  margin: 0;
  padding: 0;
  text-align: left;
  text-decoration: none;
  text-indent: 0;
  width: 150px;
  height: 50px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 1rem 2rem rgb(0 0 0 / 20%);
  border-radius: 10px;
  transition: background-color 0.3s;
}

button:hover {
   background-color: rgba(0, 0, 0, 0.4);
}

button:active {
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 20%);
}

</style>
