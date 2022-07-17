import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import BootstrapVue from "bootstrap-vue";
import "./assets/css/main.css";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-vO19yqi7Hu0elVqErou1lkwmDcShVgI",
  authDomain: "test-2fff1.firebaseapp.com",
  projectId: "test-2fff1",
  storageBucket: "test-2fff1.appspot.com",
  messagingSenderId: "793551042205",
  appId: "1:793551042205:web:62f75e7bc93076facac674",
  measurementId: "G-F1VBNQ6M9L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
