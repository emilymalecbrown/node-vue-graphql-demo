<template>
  <div id="#app">
    <h1>GRAPHQL TBD</h1>

    <h4>Beginner - Queries (Part 1)</h4>
    <div v-if="!countryEmojis && !countryLanguages">
      We need to implement some GraphQL Logic! Eventually we will display some data here :)
    </div>

    <div v-else class="country-data">
      <ul v-for="country in countryEmojis" :key="country.code">
        <li>{{ country.emoji }}</li>
      </ul>
      <ul v-for="country in countryLanguages" :key="country.code">
        <li>{{ country.languages.native }}</li>
      </ul>
    </div>

    <h4>Advanced - Mutations (Part 2)</h4>
    <p>When we implement mutations on the server and on the client we can use this form to add countries to the database!</p>
    <div class="country-mutation">
      <input v-model="country" placeholder="Canada">
      <input v-model="countryCode" placeholder="CA">
      <input v-model="countryEmoji" placeholder="🇨🇦">
      <input v-model="countryLanguage" placeholder="english,french">
      <button :click="addCountry">Add New Country</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  methods: {
    addCountry() {
      console.log('We need to add our mutation logic!')
    }
  },
  computed: {
    ...mapState(['countryEmojis', 'countryLanguages']),
  },
  beforeCreate() {
    this.$store.dispatch('getCountryEmojis');
    this.$store.dispatch('getCountryLanguages');
  },
};
</script>

<style>
</style>
