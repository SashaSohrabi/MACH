import Vue from 'vue';
import Vuex from 'vuex';
import Contentstack from 'contentstack';
import { fetchCommentsFromJsonPlaceholder } from '../microservices/jsonPlaceholder.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numberOfLists: 1,
    numberOfBooksPerPage: 5,
    skipBook: 0,
    totalBooksCount: 0,
    singleBookData: {},
    comments: []
  },
  getters: {
    getNumberOfLists: (state) => state.numberOfLists,
    getNumberOfBooksPerPage: (state) => state.numberOfBooksPerPage,
    getSkipBook: (state) => state.skipBook,
    getSingleBookData: (state) => state.singleBookData,
    getTotalBooksCount: (state) => state.totalBooksCount,
    getSingleBookUid: (state) => state.singleBookData.uid,
    getComments: (state) => state.comments,
    hasNextPage: (state) => state.skipBook + state.numberOfBooksPerPage < state.totalBooksCount,
    hasPreviousPage: (state) => state.skipBook > 0
  },
  mutations: {
    setNumberOfLists: (state, numberOfLists) => (state.numberOfLists = numberOfLists),
    setNumberOfBooksPerPage: (state, numberOfBooksPerPage) => (state.numberOfBooksPerPage = numberOfBooksPerPage),
    setTotalBooksCount: (state, totalBooksCount) => (state.totalBooksCount = totalBooksCount),
    setSingleBookData: (state, singleBook) => {
      state.singleBookData = Object.assign({}, singleBook);
    },
    setComments: (state, comments) => (state.comments = [...comments]),
    goToTheNextPage: (state) => {
      state.skipBook = state.skipBook + state.numberOfBooksPerPage;
    },
    goToThePreviousPage: (state) => {
      state.skipBook = state.skipBook - state.numberOfBooksPerPage;
    },
    deleteBookData: (state) => {
      state.singleBookData = Object.assign({}, {});
    },
    deleteComments: (state) => {
      state.comments = [];
    }
  },
  actions: {
    fetchSingleBook: async ({ commit }, uid) => {
      // TODO: Use dotenv file for constants
      const Stack = Contentstack.Stack(process.env.VUE_APP_API_KEY, process.env.VUE_APP_DELIVERY_TOKEN, process.env.VUE_APP_ENVIRONMENT_NAME);
      const Query = Stack.ContentType('book').Entry(`${uid}`);

      Query.fetch().then(
        function success(entry) {
          const title = entry.get('title'); // Retrieve field values by providing a field's uid
          const { url: imageUrl } = entry.get('image');
          const numberOfPages = entry.get('pages');
          const author = entry.get('author');
          const description = entry.get('description');

          commit('setSingleBookData', { uid, title, imageUrl, numberOfPages, author, description });
        },
        function error(err) {
          console.log(err);
        }
      );
    },
    fetchComments: async ({ commit }, uid) => {
      const comments = await fetchCommentsFromJsonPlaceholder(uid);
      commit('setComments', comments);
    }
  }
});
