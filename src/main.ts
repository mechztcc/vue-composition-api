import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import { plugin, defaultConfig } from '@formkit/vue';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import './style.css';
import App from './App.vue';
import routes from './routes';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(plugin, defaultConfig);
app.use(routes);
app.use(ElementPlus);

app.mount('#app');
