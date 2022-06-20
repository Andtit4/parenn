import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import BootstrapVue from "bootstrap-vue";
import "./assets/css/main.css";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7q0ItK89xaKyVcqZRTYooGyzTSpbuRHo",
  authDomain: "app-parenn.firebaseapp.com",
  databaseURL: "https://app-parenn-default-rtdb.firebaseio.com",
  projectId: "app-parenn",
  storageBucket: "app-parenn.appspot.com",
  messagingSenderId: "636879638718",
  appId: "1:636879638718:web:de12af2730a2596aed0eef",
  measurementId: "G-V64YY80HXX"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
