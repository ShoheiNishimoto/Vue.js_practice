<template>
  <div>
    <div class="title">
      <small>STEP4</small>
      <h1>以下の内容をご確認ください</h1>
    </div>

    <h2 class="gender">性別</h2>
    <p>{{ gender }}</p>

    <h2 class="birthday">生年月日</h2>
    <p>{{ birthday }}</p>

    <h2 class="q1">現在生命保険に加入されていますか？</h2>
    <p>{{ q1 }}</p>

    <h2 class="q2">
      現在入院中ですか。または、最近3ヶ月以内に石の診察・検査の結果、入院・手術をすすめられたことはありますか？
    </h2>
    <p>{{ q2 }}</p>

    <h2 class="q3">
      過去5年以内に、病気やけがで、手術を受けたことまたは継続して7日以上の入院をしてことがありますか？
    </h2>
    <p>{{ q3 }}</p>

    <h2>ご相談内容</h2>
    <p>{{ text }}</p>

     <div class="btnContainer">
      <button id="prev" @click="prev">前へ戻る</button>
      <button id="next" @click="sent">送信</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  methods: {
    prev() {
      this.$emit('prev');
    },
    sent() {
      alert('送信しました');
    }
  },
  computed: {
    ...mapGetters({
      gender: 'getGender',
      birthday: 'getBirthday',
      q1: 'getQ1',
      q2: 'getQ2',
      q3: 'getQ3',
      text: 'getText'
    }),
  },
};
</script>
