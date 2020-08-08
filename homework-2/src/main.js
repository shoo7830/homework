import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-scss.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";
import Prism from "vue-prism-component";
import VueClipboard from "vue-clipboard2";

Vue.component("prism", Prism);
Vue.use(VueClipboard);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
