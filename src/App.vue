<template>
  <base-container title="Vuex">
    <add-counter></add-counter>
    <button @click="addOne">Add 1</button>
    <change-counter></change-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import AddCounter from './components/AddCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';

export default {
  components: {
    BaseContainer,
    AddCounter,
    ChangeCounter
  },

  methods: {
    addOne() {
      this.$store.commit('increment');
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>