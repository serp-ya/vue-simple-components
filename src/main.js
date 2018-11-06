import Vue from 'vue';
import App from './App.vue';
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
import AppServersList from './AppServersList.vue';

Vue.component('app-header',
  AppHeader
);

Vue.component('app-footer',
  AppFooter
);

Vue.component('app-servers-list',
  AppServersList
);

new Vue({
  el: '#app',
  render: h => h(App)
});
