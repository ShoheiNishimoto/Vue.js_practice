<template>
  <div id="app">
    <keep-alive>
      <Step1 v-if="steps === 1" @firstNext="firstAddInfo"></Step1>
      <Step2 v-if="steps === 2" @secondNext="secondAddInfo" @prev="prev"></Step2>
      <Step3 v-if="steps === 3" @thirdNext="thirdAddInfo" @prev="prev"></Step3>
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
      userInfo: {
        gender: null,
        year: null,
        month: null,
        date: null,
        q1: null,
        q2: null,
        q3: null,
        text: null,
      },
    };
  },
  components: {
    Step1,
    Step2,
    Step3,
  },
  methods: {
    firstAddInfo(step1Info) {
      Object.assign(this.userInfo, step1Info);
      this.steps++;
    },
    secondAddInfo(step2Info) {
      Object.assign(this.userInfo, step2Info);
      this.steps++;
    },
    thirdAddInfo(step3Info) {
      Object.assign(this.userInfo, step3Info);
    },
    prev() {
      this.steps--;
    },
  },
};
</script>

<style></style>
