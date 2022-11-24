import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { plugin as Pinceau } from "pinceau/runtime";
import theme from "#pinceau/theme/flat";

import "./assets/main.css";
import "./assets/tokens.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Pinceau, { theme });

app.mount("#app");
