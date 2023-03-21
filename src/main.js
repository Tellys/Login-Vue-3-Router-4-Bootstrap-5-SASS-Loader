import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap'

import VueSweetalert2 from 'vue-sweetalert2';

const VueSweetalert2Options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

createApp(App)
  .use(router)
  .use(bootstrap)
  .use(VueSweetalert2, VueSweetalert2Options)
  .mount('#app')