import Vue from 'vue';
import Vuex from 'vuex';
import Contentstack from 'contentstack';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numberOfLists: 1,
    numberOfBooksPerPage: 4,
    skipBook: 0,
    totalBooksCount: 0,
    singleBookData: {}
  },
  getters: {
    getNumberOfLists: (state) => state.numberOfLists,
    getNumberOfBooksPerPage: (state) => state.numberOfBooksPerPage,
    getSkipBook: (state) => state.skipBook,
    getSingleBookData: (state) => state.singleBookData,
    getTotalBooksCount: (state) => state.totalBooksCount,
    hasNextPage: (state) => state.skipBook + state.numberOfBooksPerPage < state.totalBooksCount,
    hasPreviousPage: (state) => state.skipBook > 0
  },
  mutations: {
    setNumberOfLists: (state, numberOfLists) => (state.numberOfLists = numberOfLists),
    setNumberOfBooksPerPage: (state, numberOfBooksPerPage) => (state.numberOfBooksPerPage = numberOfBooksPerPage),
    setTotalBooksCount: (state, totalBooksCount) => (state.totalBooksCount = totalBooksCount),
    setSingleBookData: (state, singleBook) => {
      state.singleBookData = Object.assign({}, singleBook)
    },
    goToTheNextPage: (state) => {
      state.skipBook = state.skipBook + state.numberOfBooksPerPage;
    },
    goToThePreviousPage: (state) => {
      state.skipBook = state.skipBook - state.numberOfBooksPerPage;
    }
  },
  actions: {
    fetchSingleBook: async ({ commit }, uid) => {
      // TODO: Use dotenv file for constants
      const Stack = Contentstack.Stack('blt79ee9a4ccb712671', 'cs41433027a78579d5f304d46f', 'development');
      const Query = Stack.ContentType('book').Entry(`${uid}`);

      Query.fetch().then(
        function success(entry) {
          const title = entry.get('title'); // Retrieve field values by providing a field's uid
          const { url: imageUrl } = entry.get('image');
          const numberOfPages = entry.get('pages');
          const author = entry.get('author');
          const description = entry.get('description');
          
          commit('setSingleBookData', {title, imageUrl, numberOfPages, author, description});
        },
        function error(err) {
          console.log(err);
        }
      );
    }
  }
});
