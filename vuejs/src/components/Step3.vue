<template>
  <div>
    <div class="title">
      <small>STEP3</small>
      <h1>ご相談内容をご記入ください</h1>
    </div>
    <!-- 問1 -->
    <p>ご相談内容</p>
    <textarea name="" id="" cols="30" rows="10" @input="inputText"></textarea>

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
    inputText(e) {
      this.$store.dispatch('inputText', e.target.value);
    },
    next() {
      if (this.$store.state.userInfo.text === null) {
        this.blank = true;
        return;
      } else {
        this.blank = false;
        this.$emit('next');
      }
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
