<template>
  <div class="container">
    <div class="col-1">
      <div class="col-1-item">
      <span>Minimum</span> &nbsp;
      <input id="min" v-model.number="min"/>
      </div>
      <div class="col-1-item">
      <span>Maximum</span> &nbsp;
      <input id="max" v-model.number="max"/>
      </div>
      <div class=" col-1-item">
      <span>Count</span> &nbsp;
      <input id="count" v-model.number="count"/>
      </div>
    </div>
    <div class="col-2">
      <button id="btn" @click="generate({ count: count, min: min, max: max})">Generate</button>
    </div>
    <div class="col-3">
      <div v-if="results && !error" class="list-container">
      <ul id="results" class="list">
          <li v-for="(result, index) in results" style="display: flex;">
            {{result}}<div v-if="results.length > 1 && index != results.length - 1">,&nbsp;</div>
          </li>
      </ul>
      </div>
      <div v-if="error" class="error">
        {{error}}
      </div>
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
      min: null,
      max: null,
      count: null,
    };
  },
  methods: {
    clearResults() {
      this.results = [];
      this.error = null;
    },
    handleLargeCount(count) {
      if (count > 10) {
        this.error = 'Count Can\'t be Greater than 10';
        return null;
      }
    },
    generate({ count = 1, min = 1, max = 10 } = { count: 1, min: 1, max: 10 }): void {
      this.clearResults();
      //check count > 10
      if (count > 10) {
        this.error = 'Count Can\'t be Greater than 10';
        return;
      }
      // check neg
      if (Math.sign(count) === -1) {
      this.error = 'Count cannot be negative';
      return;
      }
      if (Math.sign(min) === -1) {
        this.error = 'Min cannot be negative';
        return;
      }
      if (Math.sign(max) === -1) {
        this.error = 'Max cannot be negative';
        return;
      }
      // check sane min/max
      if (min > max) {
        this.error = 'Max must be greater than Min';
        return;
      }
      //check min/max below zero
      if (min <= 0 || max <= 0) {
        this.error = 'Min and Max must both be above zero';
        return;
      }
      //checks passed, generate nums for coun > 1
      if (count > 1) {
        for (let i = 0; i <= count - 1; i++) {
          const ran = Math.floor(Math.random() * (max - min + 1) + min);
          this.results.push(ran);
        }
        //generate nums for no count
      } else {
        const ran = Math.floor(Math.random() * (max - min + 1) + min);
        this.results.push(ran);
      }
    },
  },
});
</script>

<style scoped>
  .container {
    width: 80%;
    margin: auto;
    display: flex;
  }
  .col-1-item {
    display: flex; justify-content: flex-end;
  }
  .col-1 {
    display: flex; flex-direction: column; justify-content: space-between; height: 120px; width: 30%;
  }
  .col-2 {
    width: 30%; display: flex; align-items: center; justify-content: center;
  }
  .col-3 {
    width: 30%;
  }
  .list-container {
    width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
  }
  .list {
    list-style-type: none; display: flex; align-items: center; justify-content: center;
  }
  .error {
    width: 100%; height: 100%; color: red; display: flex; justify-content: center; align-items: center;
  }

</style>