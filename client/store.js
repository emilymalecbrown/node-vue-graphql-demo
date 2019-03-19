import Vue from 'vue';
import Vuex from 'vuex';

import graphqlClient from './graphql/graphqlClient.js';
import queries from './graphql/queries.js';

Vue.use(Vuex);

export default new Vuex.Store ({
  state: () => ({
    countryEmojis: false,
    countryLanguages: false,
  }),

  getters: {},

  actions: {
    async getCountryEmojis({ commit }) {
      // TODO - add a graphQL call here
      const response = { data: { countries: [] } }

      commit('setCountryEmojis', response.data.countries);
    },
    async getCountryLanguages({ commit }) {
      // TODO - add a graphQL call here
      const response = { data: { countries: [] } }

      commit('setCountryLanguages', response.data.countries);
    },
  },

  mutations: {
    setCountryEmojis(state, countries) {
      // state.countryEmojis = ;
    },
    setCountryLanguages(state, countries) {
      // state.countryLanguages = ;
    },
  },
});
