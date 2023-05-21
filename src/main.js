/*
=========================================================
* Vuetify Material Dashboard 2 PRO - v3.0.0
=========================================================

* Product Page:  https://www.creative-tim.com/product/vuetify-material-dashboard-pro
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// eslint-disable-next-line
/* eslint-disable */
/* eslint-disable no-new */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//import i18n from "./i18n";
import vuetify from "./plugins/vuetify";
import DashboardPlugin from "./plugins/dashboard-plugin";

import NumberField from "@/components/shared/NumberField.vue";
import TextField from   "@/components/shared/TextField.vue";
import OverlayVue from  "@/components/shared/Overlay.vue";
import SelectInput from "@/components/shared/SelectInput.vue";
import SelectField from "@/components/shared/SelectField.vue";


Vue.component("NumberField", NumberField);
Vue.component("TextField", TextField);
Vue.component("Overlay", OverlayVue);
Vue.component("SelectInput", SelectInput);
Vue.component("SelectField", SelectField);

Vue.config.productionTip = false;

//import "./plugins/i18n";

// Photoswipe Gallery
import Photoswipe from "vue-pswipe";
Vue.use(Photoswipe);

// plugin setup
Vue.use(DashboardPlugin);

new Vue({
  router,
  vuetify,
  //i18n,
  render: (h) => h(App),
}).$mount("#app");
