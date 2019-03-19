<template>
  <div id="#app">
    <Todo v-if="!countryEmojis && !countryLanguages" />
    <div v-else class="country-data">
      <ul v-for="country in countryEmojis" :key="country.code">
        <li>{{ country.emoji }}</li>
      </ul>
      <ul v-for="country in countryLanguages" :key="country.code">
        <li>{{ country.languages.native }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Todo from './Todo';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['countryEmojis', 'countryLanguages']),
  },
  beforeCreate() {
    this.$store.dispatch('getCountryEmojis');
    this.$store.dispatch('getCountryLanguages');
  },
};
</script>

<style lang="scss">
</style>
