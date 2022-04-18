// import "@/assets/styles/reset.scss";

// import "devextreme/dist/css/dx.common.css";

// import "./themes/generated/theme.base.css";
// import "./themes/generated/theme.additional.css";

import "@/assets/styles/global.scss";
import "@/assets/styles/dx-custom-styles.scss";

// import "devextreme/dist/css/dx.greenmist.css";

import "devextreme/dist/css/dx.material.teal.light.css";

import ruMessages from "devextreme/localization/messages/ru.json";
import { locale, loadMessages } from "devextreme/localization";
loadMessages(ruMessages);
locale(navigator.language);

import { createApp } from "vue";
import router from "./router/router";

import App from "./App";
import appInfo from "./app-info";

const app = createApp(App);
app.use(router);
app.config.globalProperties.$appInfo = appInfo;
app.mount("#app");
