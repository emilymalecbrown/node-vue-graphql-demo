import Vue from 'vue';
import Vuex from 'vuex';

import graphqlClient from './graphql/graphqlClient.js';
import queries from './graphql/queries.js';

Vue.use(Vuex);

new Vuex.Store ({
  state: () => ({
    countryEmojis: [],
    countryLanguage: [],
  }),

  getters: {
    countries(state) {
      return state.countries;
    },
  },

  actions: {
    async getCountryEmojis({ rootState, commit }) {
      // TODO
      // const response = await SOME GRAPHQL CALL

      commit('setCountryEmojis', response.data.countries);
    },
    async getCountryLanguages({ rootState, commit }) {
      // TODO
      // const response = await SOME GRAPHQL CALL

      commit('setCountryLanguages', response.data.countries);
    },
  },

  mutations: {
    setCountryEmojis(state, countries) {
      state.countryEmojis = countries;
    },
    setCountryLanguages(state, languages) {
      state.countryLanguages = languages;
    },
  },
});
