import { createApp } from 'vue'
import App from './App.vue'

// Defina os recursos de feature flags explicitamente
const app = createApp(App);
app.config.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

app.mount('#app');