import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { useElementPlus } from "./elementPlus";
import "./style/element-variables.scss";
import "./style/body.scss";

const app = createApp(App);
useElementPlus(app);
app.use(router);
app.mount("#app");
