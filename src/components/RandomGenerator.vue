<template>
  <div>
    <input id="min" v-model.number="min"/>
    <input id="max" v-model.number="max"/>
    <input id="count" v-model.number="count"/>
    <button id="btn">Generate</button>
    <ul id="results">
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      results: new Array<number>(),
    };
  },
  methods: {
    generate({ count = 1, min = 1, max = 10 } = { count: 1, min: 1, max: 10 }): void {

    },
  },
});
</script>

<style scoped>

</style>