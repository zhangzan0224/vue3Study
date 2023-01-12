import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
//注意use要在mount之前

createApp(App).use(router).mount("#app");
