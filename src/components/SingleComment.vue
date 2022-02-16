<template>
  <div class="comment">
    <div class="comment__email">{{comment.email}}:</div>
    <div class="comment__text">{{comment.body}}</div>
  </div>
</template>

<script>
export default {
  name: 'SingleComment',
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.comment {
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  padding: 40px;
  font-size: 16px;
}

.comment:last-child {
  border-bottom: none;
}

.comment__email {
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
