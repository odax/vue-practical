<template>
  <div>
    MIN
    <input id="min" v-model.number="min"/>
    <br>
    MAX
    <input id="max" v-model.number="max"/>
    <br>
    COUNT
    <input id="count" v-model.number="count"/>
    <br>
    <button id="btn" @click="generate({ count: count, min: min, max: max})">Generate</button>
    <ul id="results" v-if="results">
        <li v-for="result in results">
          {{result}}
        </li>
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
    clearResults: function () {
      this.results = [];
    },
   generate({ count = 1, min = 1, max = 10 } = { count: 1, min: 1, max: 10 }): void {
    this.clearResults();
    if (count > 1) {
    for (let i = 0; i <= count - 1; i++) {
      let ran = Math.floor(Math.random() * (max - min + 1) + min);
      this.results.push(ran);
    }
    } else {
      let ran = Math.floor(Math.random() * (max - min + 1) + min);

      this.results.push(ran);
    }
    console.log(this.results);
  }
  },
});
</script>

<style scoped>

</style>