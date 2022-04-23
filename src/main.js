import "@/assets/styles/global.scss";
import "@/assets/styles/dx-custom-styles.scss";
// ---------------------------------------------
import "devextreme/dist/css/dx.material.teal.light.css";
// ---------------------------------------------
import config from "devextreme/core/config";
config({
  editorStylingMode: "outlined"
});
// ---------------------------------------------
import ruMessages from "devextreme/localization/messages/ru.json";
import { locale, loadMessages } from "devextreme/localization";
loadMessages(ruMessages);
locale(navigator.language);
// ---------------------------------------------

// ---------------------------------------------

import { createApp } from "vue";
import router from "./router/router";

import App from "./App";
import appInfo from "./app-info";

const app = createApp(App);
app.use(router);
app.config.globalProperties.$appInfo = appInfo;
app.mount("#app");
