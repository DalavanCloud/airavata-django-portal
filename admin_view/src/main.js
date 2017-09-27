import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import ExperimentsDashboard from './components/dashboards/ExperimentDashboard.vue';
import AdminDashboard from './components/dashboards/AdminDashboard.vue';

import router from './router';
import store from './store/store';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(VueRouter);


export function initializeApacheAiravataDashboard(dashboardName) {
  return new Vue({
    el: '#app',
    router,
    store,
    template: '<' + dashboardName + '/>',
    components: {ExperimentsDashboard, AdminDashboard}

  })
};


