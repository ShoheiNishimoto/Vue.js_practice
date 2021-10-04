<template>
  <div class="container">
    <div class="header">
      <h2>{{ user.name }} さんようこそ</h2>
      <h3>残高:{{ myBalance }}</h3>
      <button @click="logout">ログアウト</button>
    </div>
    <h2 class="title">ユーザ一覧</h2>
    <div class="userList">
      <h3 class="userList__title">ユーザ名</h3>
      <!-- ユーザーリスト -->
      <div class="userList__user">
        <p class="userList__user-name">test1</p>
        <div class="btnWrapper">
          <button class="userList__user-walletBtn" @click="switchWalletModal">
            Walletを見る
          </button>
          <button class="userList__user-sentBtn " @click="switchSentModal">
            送る
          </button>
        </div>
      </div>
      <!-- ------------- -->

      <!-- モーダルウインドウ -->
      <ModalWallet v-if="getCurrentWalletModal"></ModalWallet>
      <ModalSent v-if="getCurrentSentModal"></ModalSent>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import ModalWallet from "../components/modal-wallet.vue";
import ModalSent from "../components/modal-sent.vue";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    ModalWallet,
    ModalSent,
  },
  computed: {
    ...mapGetters(["getCurrentWalletModal", "getCurrentSentModal"]),
    user() {
      return this.$store.getters.getCurrentUser;
    },
    myBalance() {
      return this.$store.getters.getMyBalance;
    },
  },
  methods: {
    ...mapMutations(["switchWalletModal", "switchSentModal"]),
    logout() {
      this.$store.dispatch('logout');
    }
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        const currentUser = user;
        this.$store.commit('updateUser', {
          uid: currentUser.uid,
          email: currentUser.email,
          name: currentUser.displayName
        })
        this.$store.dispatch("setMyBalance");
        this.$store.dispatch("fetchMyBalance");
      }else {
        console.log('user is not exist');
      }
    })
  },
};
</script>

<style scoped>
.container {
  width: 50%;
  padding: 10px;
  margin: 0 auto;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  text-align: center;
}
.userList__title {
  text-align: left;
}
.userList__user {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
