import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//导入element-plus
import ElementPlus from "element-plus";
import local from "element-plus/lib/locale/lang/zh-cn";
import "element-plus/dist/index.css";
import * as ElIcons from "@element-plus/icons";

// createApp(App).use(store).use(router).mount("#app");
const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus, { local });
for (const name in ElIcons) {
  app.component(name, (ElIcons as any)[name]);
}
app.mount("#app");
