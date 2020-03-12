<template>
  <div>
    <h2>Generation of a Random Number</h2>
    <random-generator/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import RandomGenerator from '@/components/RandomGenerator.vue';

  export default Vue.extend({
    components: {
      RandomGenerator,
    },
  });
</script>

<style scoped>

</style>