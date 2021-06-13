<template>
  <div>
    <div class="title">
      <small>STEP2</small>
      <h1>以下にお答えください</h1>
    </div>
    <!-- 問1 -->
    <p>現在生命保険に加入されていますか？</p>
    <label for="yes1">
      <input type="radio" name="q1" value="yes" id="yes1" @input="selectQ1" />
      はい
    </label>
    <label for="no1">
      <input type="radio" name="q1" value="no" id="no1" @input="selectQ1" />
      いいえ
    </label>

    <!-- 問2 -->
    <p>
      現在入院中ですか。または、最近3ヶ月以内に石の診察・検査の結果、入院・手術をすすめられたことはありますか？
    </p>
    <label for="yes2">
      <input type="radio" name="q2" value="yes" id="yes2" @input="selectQ2" />
      はい
    </label>
    <label for="no2">
      <input type="radio" name="q2" value="no" id="no2" @input="selectQ2" />
      いいえ
    </label>

    <!-- 問3 -->
    <p>
      過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしてことがありますか？
    </p>
    <label for="yes3">
      <input type="radio" name="q3" value="yes" id="yes3" @input="selectQ3" />
      はい
    </label>
    <label for="no3">
      <input type="radio" name="q3" value="no" id="no3" @input="selectQ3" />
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
      blank: false,
    };
  },
  methods: {
    selectQ1(e) {
      this.$store.dispatch('selectQ1', e.target.value);
    },
    selectQ2(e) {
      this.$store.dispatch('selectQ2', e.target.value);
    },
    selectQ3(e) {
      this.$store.dispatch('selectQ3', e.target.value);
    },
    next() {
      this.$emit('next');
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
