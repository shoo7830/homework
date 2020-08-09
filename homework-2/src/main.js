import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/components/prism-scss.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";
import Prism from "vue-prism-component";
import KpButton from "./components/KpButton";
import KpInput from "./components/KpInput";
import KpRadio from "./components/KpRadio";
import KpSelect from "./components/KpSelect";
import KpSwitch from "./components/KpSwitch";

Vue.component("prism", Prism);
Vue.component("kp-button", KpButton);
Vue.component("kp-input", KpInput);
Vue.component("kp-radio", KpRadio);
Vue.component("kp-select", KpSelect);
Vue.component("kp-switch", KpSwitch);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
