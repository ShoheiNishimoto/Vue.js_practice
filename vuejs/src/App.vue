<template>
  <div id="app">
    <keep-alive>
      <Step1 v-if="steps === 1" @next="next"></Step1>
      <Step2 v-if="steps === 2" @next="next" @prev="prev"></Step2>
      <Step3 v-if="steps === 3" @next="next" @prev="prev"></Step3>
    </keep-alive>
  </div>
</template>

<script>
import Step1 from './components/Step1.vue';
import Step2 from './components/Step2.vue';
import Step3 from './components/Step3.vue';

export default {
  data() {
    return {
      steps: 1,
    };
  },
  components: {
    Step1,
    Step2,
    Step3,
  },
  methods: {
    next() {
      if (this.steps < 3) {
        this.steps++;
      }
    },
    prev() {
      this.steps--;
    },
  },
};
</script>

<style></style>
