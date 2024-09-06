import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import 'vuetify/styles';  // Vuetifyのスタイルをインポート
import '@/assets/styles/styles.css';  // グローバルスタイルをインポート

createApp(App)
  .use(vuetify)
  .mount('#app');
