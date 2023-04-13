import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import GlobalComponents from "./utils/gobal";

createApp(App).use(GlobalComponents).mount("#app");
