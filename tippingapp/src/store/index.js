import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      uid: "",
      email: "",
      name: "",
    },
    myBalance: null,
    walletModal: false,
    sentModal: false,
  },
  getters: {
    getCurrentUser: (state) => {
      return state.user;
    },
    getMyBalance: (state) => {
      return state.myBalance;
    },
    getCurrentWalletModal: (state) => {
      return state.walletModal;
    },
    getCurrentSentModal: (state) => {
      return state.sentModal;
    },
  },
  mutations: {
    updateUser(state, user) {
      state.user = user;
    },
    switchWalletModal(state) {
      state.walletModal = !state.walletModal;
    },
    switchSentModal(state) {
      state.sentModal = !state.sentModal;
    },
    updateMyBalance(state, myBalance) {
      state.myBalance = myBalance;
    },
    deleteLoginUser(state) {
      state.user.uid = "";
      state.user.email = "";
      state.user.name = "";
      state.myBalance = null;
      router.push("/login");
    },
  },
  actions: {
    registerNewUser({ dispatch }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((userCredential) => {
          console.log(userCredential);
          dispatch("updateName", payload.name);
        })
        .catch((error) => {
          // var errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
    },
    login(context, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((userCredential) => {
          console.log(userCredential);
          //  dashboard へのページ遷移
          router.push("/dashboard");
        })
        .catch((error) => {
          alert(error);
        });
    },
    logout({ commit }) {
      firebase.auth().signOut();
      commit('deleteLoginUser')
    },
    //ユーザーの残高を設定する仮のアクション
    setMyBalance({ getters }) {
      const db = firebase.firestore();
      const user = getters.getCurrentUser;
      db.collection(`user/${user.uid}/userdata`)
        .doc("balance")
        .set({
          userBalance: 899,
        })
        .catch((error) => {
          console.log("Error writing document: ", error);
        });
    },
    //---------------------------------------

    fetchMyBalance({ getters, commit }) {
      const db = firebase.firestore();
      const user = getters.getCurrentUser;
      const docRef = db.collection(`user/${user.uid}/userdata`).doc("balance");
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            commit("updateMyBalance", doc.data().userBalance);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    updateName(context, name) {
      firebase
        .auth()
        .currentUser.updateProfile({
          displayName: name,
        })
        .then(() => {
          console.log("updataName successful");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    moneyTransfer() {
      //仮のアクション
      alert("送金用のメソッド");
    },
  },
});
