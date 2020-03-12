<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>Instructions</h2>
    <div style="text-align: left; width: 60em; margin-left: auto; margin-right: auto;">
      This is a skeleton project that consists of a simple Vue application.
      <p/>
      Following the "Generator" link, you will find a nearly empty page with a non-functional form. 
      This page is supposed to allow you to generate a series of 1 - 10 random integers. 
      Additionally you may enter a minimum and maximum value (inclusive) for the generator constraints.
      The "generator.spec.ts" file contains pre-written Jest tests that will validate the functionality of this page.
      </p>
      Your task is to complete this page so that all of the tests pass when run. The code you will be adding will be
      in the "RandomGenerator.vue" component. 
      </p>
      Review the test file for exact details but in general terms, the tests will check:
      <ul>
        <li>The component loads succesfully and mounts on the page</li>
        <li>The component has a function called "generate" that takes optional count, min, and max parameters</li>
        <li>The "generate" function will build "count" random integers (default 1) between "min" (default 1) and "max" (default 10)</li>
        <li>The output of the "generate" function is stored in the component's "data" object as an array called "results"</li>
        <li>The page has an input with an id of "count" that controls how many results to generate.
          <ul>
            <li>This number must be an integer between 1 and 10 (inclusive)</li>
          </ul>
        </li>
        <li>The page has an input with an id of "min" that sets the lower bound for the generator.
          <ul>
            <li>This number must be an integer greater than 0.</li>
            <li>This number must be less than or equal to the "max" value</li>
          </ul>
        </li>
        <li>The page has an input with an id of "max" that sets the upper bound for the generator.
          <ul>
            <li>This number must be an integer greater than 0.</li>
            <li>This number must be greater than or equal to the "min" value</li>
          </ul>
        </li>
        <li>The page has a button with an id of "btn" that runs the generate function with the parameters if they are valid</li>
        <li>The "results" array in the component's data is displayed on the page as "li" elements that are direct children of an element with the id of "results"</li>
      </ul>
      Run the tests on the project with "npm run test:unit", when all tests are passing the assignment is complete.
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend ({
  name: 'home' as string,
});
</script>
