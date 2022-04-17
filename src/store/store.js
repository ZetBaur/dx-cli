import { createStore } from "vuex";
import auth from "@/auth/store/auth";

// const plugins = [];

// if (process.env.NODE_ENV === "development") {
//   plugins.push(createLogger());
// }

export default createStore({
  // plugins,

  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { auth }
});
