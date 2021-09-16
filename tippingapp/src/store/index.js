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
  },
  actions: {
    registerNewUser({ dispatch }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((userCredential) => {
          console.log(userCredential);
          dispatch("update", payload.name);
        })
        .catch((error) => {
          // var errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
    },
    login({ dispatch }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((userCredential) => {
          console.log(userCredential);
          //  dashboard へのページ遷移
          router.push("/dashboard");
          dispatch("checkLoginUser");
        })
        .catch((error) => {
          alert(error);
        });
    },
    checkLoginUser({ commit }) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          commit("updateUser", {
            uid: user.uid,
            email: user.email,
            name: user.displayName,
          });
        } else {
          router.push("/login");
        }
      });
    },
    //---------------------------------------
    //ユーザーの残高を設定する仮のアクション
    setMyBalance({ getters }) {
      const db = firebase.firestore();
      const user = getters.getCurrentUser;
      db.collection(`user/${user.uid}`)
        .doc("balance")
        .set({
          userBalance: 500,
        })
        .catch((error) => {
          console.log("Error writing document: ", error);
        });
    },
    //---------------------------------------

    fetchMyBalance({ getters, commit }) {
      const db = firebase.firestore();
      const user = getters.getCurrentUser;
      const docRef = db.collection(`user/${user.uid}`).doc("balance");

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

    update(context, name) {
      firebase
        .auth()
        .currentUser.updateProfile({
          displayName: name,
        })
        .then(() => {
          console.log("updata successful");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setDashBoard({ dispatch }) {
      dispatch("checkLoginUser");
      dispatch("setMyBalance"); //仮のアクション
      dispatch("fetchMyBalance");
    },
    moneyTransfer() {
      //仮のアクション
      alert("送金用のメソッド");
    },
  },
});
