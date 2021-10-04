<template>
  <div class="modalContainer">
    <div class="modal">
      <div class="modal__top">
        <h3>~さんの残高</h3>
        <h4>〇〇円</h4>
      </div>
      <div class="modal__bottom">
        <button class="close" @click="switchWalletModal">close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["switchWalletModal"]),
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
</style>
