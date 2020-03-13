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
    <div style="color: red;" v-if="error">
      {{error}}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      results: new Array<number>(),
      error: null,
    };
  },
  methods: {
    clearResults: function () {
      this.results = [];
      this.error = null;
    },
    handleLargeCount(count) {
      if (count > 10) {
        this.error = "Count Can't be Greater than 10";
        return null;
      }
    },
    generate({ count = 1, min = 1, max = 10 } = { count: 1, min: 1, max: 10 }): void {
    this.clearResults();
    //count check
    if (count > 10) {
        this.error = "Count Can't be Greater than 10";
        return;
      };
    //check neg
    if (Math.sign(count) === -1) {
      this.error = "Count cannot be negative";
      return;
    }
    if (Math.sign(min) === -1) {
      this.error = "Min cannot be negative";
      return;
    }
    if (Math.sign(max) === -1) {
      this.error = "Max cannot be negative";
      return;
    }

    //sane min/max
    if (min > max) {
      this.error = "Max must be greater than Min";
      return;
    }

    //min/max above zero
    if (min <= 0 || max <= 0) {
      this.error = "Min and Max must both be above zero";
      return;
    }

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