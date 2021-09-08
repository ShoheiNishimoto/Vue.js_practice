import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      uid: "",
      email: "",
      name: "",
    },
  },
  getters: {},
  mutations: {
    getDate(state, user) {
      state.user = user;
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
          dispatch("checkLoginUser");
        })
        .catch((error) => {
          alert(error);
        });
    },
    checkLoginUser({ commit }) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user);
          commit("getDate", {
            uid: user.uid,
            email: user.email,
            name: user.displayName,
          });
        }
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
  },
});
