import { faCaretDown, faEye, faTrophy, faWallet } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import router from './router';
import Vue from 'vue';

library.add(faCaretDown, faEye, faFacebookF, faWallet, faTrophy);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
