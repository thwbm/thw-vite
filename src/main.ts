import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "element-plus/packages/theme-chalk/src/base.scss";
import { useElementPlus } from "./elementPlus";

const app = createApp(App);
useElementPlus(app);
app.use(router);
app.mount("#app");
