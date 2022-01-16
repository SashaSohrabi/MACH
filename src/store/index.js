import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numberOfLists: 1,
    numberOfBooksPerPage: 5,
    skipBook: 0,
    totalBooksCount: 0
  },
  getters: {
    getNumberOfLists: (state) => state.numberOfLists,
    getNumberOfBooksPerPage: (state) => state.numberOfBooksPerPage,
    getSkipBook: (state) => state.skipBook,
    getTotalBooksCount: (state) => state.totalBooksCount,
    hasNextPage: (state) => state.skipBook + state.numberOfBooksPerPage < state.totalBooksCount,
    hasPreviousPage: (state) => state.skipBook > 0
  },
  mutations: {
    setNumberOfLists: (state, numberOfLists) => (state.numberOfLists = numberOfLists),
    setNumberOfBooksPerPage: (state, numberOfBooksPerPage) => (state.numberOfBooksPerPage = numberOfBooksPerPage),
    setTotalBooksCount: (state, totalBooksCount) => (state.totalBooksCount = totalBooksCount),
    goToTheNextPage: (state) => {
       state.skipBook = state.skipBook + state.numberOfBooksPerPage;
    },
    goToThePreviousPage: (state) => {
       state.skipBook = state.skipBook - state.numberOfBooksPerPage;
    }
  },
  actions: {}
});
