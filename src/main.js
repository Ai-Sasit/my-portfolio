import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createGtag } from "vue-gtag";

const gtag = createGtag({
  tagId: "G-NCHP6M37W4",
});

createApp(App).use(gtag).mount("#app");
