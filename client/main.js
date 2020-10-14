import { faCaretDown, faEye, faHome, faSearch, faTrophy, faWallet } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import router from './router';
import store from './store/store';
import Vue from 'vue';

library.add(faCaretDown, faEye, faFacebookF, faHome, faSearch, faWallet, faTrophy);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
