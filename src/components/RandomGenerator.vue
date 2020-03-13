<template>
  <div>
    <input id="min" v-model.number="min"/>
    <input id="max" v-model.number="max"/>
    <input id="count" v-model.number="count"/>
    <button id="btn" @click="generate({ count: 5, min: 10, max: 100 })">Generate</button>
    <ul id="results">
      <div v-if="results">
        <div v-for="result in results">
          {{result}}
        </div>
      </div>
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