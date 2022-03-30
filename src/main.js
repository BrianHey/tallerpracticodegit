import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCWnoFT1eoSfAs-j543julgVC1gE4AmhhA",
  authDomain: "probando-fireb.firebaseapp.com",
  projectId: "probando-fireb",
  storageBucket: "probando-fireb.appspot.com",
  messagingSenderId: "951368786824",
  appId: "1:951368786824:web:eb9a66190e83fa3aa7503d"
};

initializeApp(firebaseConfig);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
