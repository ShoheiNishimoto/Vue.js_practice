<template>
  <div>
    <div class="title">
      <small>STEP1</small>
      <h1>お客様の情報を入力してください</h1>
    </div>
    <!-- 性別 -->
    <p>性別</p>
    <label for="male">
      <input type="radio" value="male" id="male" v-model="gender" />
      男
    </label>
    <label for="female">
      <input type="radio" value="female" id="female" v-model="gender" />
      女
    </label>

    <!-- 生年月日 -->
    <p>生年月日</p>
    <div>
      <select name="yaer" v-model="year">
        <option value="">-</option>
        <option v-for="n in 100" :key="n" :value="2021 - (100 - n)">{{
          2021 - (100 - n)
        }}</option>
      </select>
      年
      <select name="month" v-model="month">
        <option value="">-</option>
        <option v-for="n in 12" :key="n" :value="n">{{ n }}</option>
      </select>
      月
      <select name="date" v-model="date">
        <option value="">-</option>
        <option v-for="n in 31" :key="n" :value="n">{{ n }}</option>
      </select>
      日
    </div>

    <button id="next" @click="next">次へ進む</button>
    <p class="blank" v-show="blank">未記入の項目があります</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gender: null,
      year: null,
      month: null,
      date: null,
      blank: false,
    };
  },
  methods: {
    next() {
      if (
        this.gender === null ||
        this.year === null ||
        this.month === null ||
        this.date === null
      ) {
        this.blank = true;
        return;
      }
      this.$emit('firstNext', {
        gender: this.gender,
        year: this.year,
        month: this.month,
        date: this.date,
      });
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
