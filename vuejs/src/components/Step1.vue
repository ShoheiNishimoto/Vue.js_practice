<template>
  <div>
    <div class="title">
      <small>STEP1</small>
      <h1>お客様の情報を入力してください</h1>
    </div>
    <!-- 性別 -->
    <p>性別</p>
    <label for="male">
      <input
        type="radio"
        name="gender"
        value="male"
        id="male"
        @change="selectGender"
      />
      男
    </label>
    <label for="female">
      <input
        type="radio"
        name="gender"
        value="female"
        id="female"
        @change="selectGender"
      />
      女
    </label>

    <!-- 生年月日 -->
    <p>生年月日</p>
    <div>
      <select name="yaer" @change="selectYear">
        <option value="">-</option>
        <option v-for="year in years" :key="year" :value="year">{{
          year
        }}</option>
      </select>
      年
      <select name="month" @change="selectMonth">
        <option value="">-</option>
        <option v-for="month in months" :key="month" :value="month">{{
          month
        }}</option>
      </select>
      月
      <select name="date" @change="selectDate">
        <option value="">-</option>
        <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
      </select>
      日
    </div>

    <button id="next" @click="next">次へ進む</button>
    <p class="blank" v-show="blank">未記入の項目があります</p>
  </div>
</template>

<script>
import { years, months, days } from '../helpers/definition.js';
export default {
  data() {
    return {
      blank: false,
      years,
      months,
      days,
    };
  },
  methods: {
    selectGender(e) {
      this.$store.dispatch('selectGender', e.target.value);
    },
    selectYear(e) {
      this.$store.dispatch('selectYear', e.target.value);
    },
    selectMonth(e) {
      this.$store.dispatch('selectMonth', e.target.value);
    },
    selectDate(e) {
      this.$store.dispatch('selectDate', e.target.value);
    },
    next() {
      if (
        this.$store.getters.getUserObj.gender === null ||
        this.$store.getters.getUserObj.year === null ||
        this.$store.getters.getUserObj.month === null ||
        this.$store.getters.getUserObj.date === null
      ) {
        this.blank = true;
        return;
      } else {
        this.blank = false;
        this.$emit('next');
      }
    },
  },
};
</script>

<style>
.title {
  display: flex;
}
.title h1 {
  margin: 0;
  font-size: 25px;
  font-weight: normal;
}
.blank {
  color: red;
}
</style>
