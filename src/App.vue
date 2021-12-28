<template>
  <base-container title="Vuex">
    <add-counter></add-counter>
    <button @click="addOne">Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import AddCounter from './components/AddCounter.vue'

export default {
  components: {
    BaseContainer,
    AddCounter,
  },

  methods: {
    addOne() {
          this.$store.state.counter++;
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