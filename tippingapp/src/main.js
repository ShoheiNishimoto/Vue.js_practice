import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';
import firebase from 'firebase';

Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAw5u4TrizU4gbCFQKpd4JNjJXyRzmImyo',
  authDomain: 'tippingapp-vuejs.firebaseapp.com',
  projectId: 'tippingapp-vuejs',
  storageBucket: 'tippingapp-vuejs.appspot.com',
  messagingSenderId: '291137575551',
  appId: '1:291137575551:web:c0894c57a3edc0fde93d4a',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
