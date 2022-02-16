<template>
  <div :class="{ expanded: showComments }" class="comments">
    <button class="comments__button" @click="toggleComments()">{{ showComments ? 'Hide comments' : 'Show comments' }}</button>
    <div class="comments__list" v-if="showComments">
      <single-comment v-for="(comment, indx) in comments" :key="indx" :comment="comment"></single-comment>
    </div>
    <div class="comments__place-holder" v-else>...</div>
  </div>
</template>

<script>
import SingleComment from '@/components/SingleComment.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: { SingleComment },
  name: 'CommentsList',
  component: {
    SingleComment
  },
  props: {
    uid: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showComments: false
    };
  },
  computed: {
    ...mapGetters({
      comments: 'getComments'
    })
  },
  methods: {
    ...mapActions(['fetchComments']),
    toggleComments() {
      this.showComments = !this.showComments;
      if (!this.comments.length) {
        this.fetchComments(this.uid);
      }
    }
  }
};
</script>

<style>
.comments {
  background: rgba(255, 255, 255, 0.5);
  margin: auto;
  width: 80%;
  padding: 15px;
  border-radius: 15px;
  text-align: left;
  position: relative;
}

.comments__button {
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 150px;
  height: 30px;
  color: rgba(255, 255, 255, 0.7);
  border: none;
  cursor: pointer;
}

.comments__button::after {
  content: '';
  display: block;
  background: url(../assets/img/arrow-bottom.svg);
  background-size: contain;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 15px;
  right: 20px;
  opacity: 0.5;
  text-align: left;
  transform: rotate(-180deg);
  transition: all 0.3s;
}

.expanded .comments__button::after {
  transform: rotate(0deg);
}

.comments__list {
  max-height: 0;
  overflow: auto;
  transition: all 0.3s;
}

.expanded .comments__list {
  max-height: 500px;
}

.comments__place-holder {
  text-align: center;
  font-size: 30px;
  line-height: 10px;
}
</style>
