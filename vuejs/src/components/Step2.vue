<template>
  <div>
    <div class="title">
    <small>STEP2</small>
    <h1>以下にお答えください</h1>
    </div>
    <!-- 問1 -->
    <p>現在生命保険に加入されていますか？</p>
    <label for="yes1">
      <input type="radio" value="yes" id="yes1" v-model="q1" />
      はい
    </label>
    <label for="no1">
      <input type="radio" value="no" id="no1" v-model="q1" />
      いいえ
    </label>

    <!-- 問2 -->
    <p>
      現在入院中ですか。または、最近3ヶ月以内に石の診察・検査の結果、入院・手術をすすめられたことはありますか？
    </p>
    <label for="yes2">
      <input type="radio" value="yes" id="yes2" v-model="q2" />
      はい
    </label>
    <label for="no2">
      <input type="radio" value="no" id="no2" v-model="q2" />
      いいえ
    </label>

    <!-- 問3 -->
    <p>
      過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしてことがありますか？
    </p>
    <label for="yes3">
      <input type="radio" value="yes" id="yes3" v-model="q3" />
      はい
    </label>
    <label for="no3">
      <input type="radio" value="no" id="no3" v-model="q3" />
      いいえ
    </label>

    <div class="btnContainer">
      <button id="prev" @click="prev">前へ戻る</button>
      <button id="next" @click="next">次へ進む</button>
    </div>
    <p class="blank" v-show="blank">未記入の項目があります</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      q1: null,
      q2: null,
      q3: null,
      blank: false,
    };
  },
  methods: {
    next() {
      if (this.q1 === null || this.q2 === null || this.q3 === null) {
        this.blank = true;
        return;
      }
      this.$emit('secondNext', {
        q1: this.q1,
        q2: this.q2,
        q3: this.q3,
      });
    },
    prev() {
      this.$emit('prev');
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
