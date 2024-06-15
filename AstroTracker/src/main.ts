import {createApp} from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import {createPinia} from 'pinia';

import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/aura-dark-green/theme.css';
import 'primeicons/primeicons.css';

const pinia = createPinia()
const app = createApp(App);

app.use(PrimeVue);
app.use(pinia);
app.mount('#app');
