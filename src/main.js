import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import dragPlugin from './plugin/drag-plugin.js';
import App from './App.vue';;
import './style.css';;

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);

app.use(pinia);
app.use(dragPlugin);
app.mount('#app');
