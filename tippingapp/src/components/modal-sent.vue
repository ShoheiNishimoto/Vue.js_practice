<template>
  <div class="modalContainer" @click="switchSentModal">
    <div class="modal">
      <div class="modal__top">
        <h3>自分の残高:{{ myBalance }}</h3>
        <h4>〇〇円</h4>
      </div>

      <div class="modal__middle">
        <p>送信する金額</p>
        <input type="text" v-model="remittance" />
      </div>

      <div class="modal__bottom">
        <button class="sent" @click="moneyTransfer">送る</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      remittance: null,
    };
  },
  computed: {
    myBalance() {
      return this.$store.getters.getMyBalance;
    }
  },
  methods: {
    ...mapMutations(["switchSentModal"]),
    ...mapActions(["moneyTransfer"]),
  },
};
</script>

<style scoped>
.modalContainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(30, 30, 30, 0.8);
}
.modal {
  width: 400px;
  padding: 10px;
  height: auto;
  position: absolute;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal__bottom {
  margin-top: 10px;
}
</style>
