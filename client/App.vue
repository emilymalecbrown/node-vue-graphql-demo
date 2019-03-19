<template>
  <div id="#app">
    <Todo v-if="!country" />
    <div class="country-data">
      <ul v-for="country in countries.countryEmojis" :key="country.code">
        <li>{{ country.emoji }}</li>
      </ul>
      <ul v-for="country in countries.countryLanguages" :key="country.lang">
        <li>{{ country.languages }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Todo from './Todo';
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['countries']),
  },
  beforeCreate() {
    this.$store.dispatch('getCountryEmojis');
    this.$store.dispatch('getCountryLanguages');
  },
};
</script>

<style lang="scss">
</style>
