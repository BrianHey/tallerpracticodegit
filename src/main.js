import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBHG2Jje50AooiVYsnBP7epvvhA5N42I9M",
  authDomain: "crud-vue-firebase-3af18.firebaseapp.com",
  databaseURL: "https://crud-vue-firebase-3af18.firebaseio.com",
  projectId: "crud-vue-firebase-3af18",
  storageBucket: "crud-vue-firebase-3af18.appspot.com",
  messagingSenderId: "563994405254",
  appId: "1:563994405254:web:de40d82cd665edde68a407"
};

initializeApp(firebaseConfig);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
