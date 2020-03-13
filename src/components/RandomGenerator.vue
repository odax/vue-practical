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
      <button class="button" id="btn" @click="generate({ count: count, min: min, max: max})"><span>Generate</span></button>
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
        {{error}}!
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
      // check count > 10
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
      // check min/max below zero
      if (min <= 0 || max <= 0) {
        this.error = 'Min and Max must both be above zero';
        return;
      }
      // checks passed, generate nums for coun > 1
      if (count > 1) {
        for (let i = 0; i <= count - 1; i++) {
          const ran = Math.floor(Math.random() * (max - min + 1) + min);
          this.results.push(ran);
        }
        // generate nums for no count
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
  border: 4px solid grey;
  background: #b590ca;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.button {
  border-radius: 4px;
  background: #a8d3da;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 28px;
  padding: 20px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
.col-1-item {
  display: flex;
  justify-content: flex-end;
}
.col-1 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
  width: 30%;
}
.col-2 {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.col-3 {
  width: 37%;
  background: #f5cab3;
  border-radius: 5px;
}
.list-container {
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.list {
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
.error {
  width: 100%;
  height: 72px;
  color: darkred;
  display: flex;
  justify-content:center;
  align-items: center;
  font-weight: 700;
}

</style>