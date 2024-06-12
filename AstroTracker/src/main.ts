import {createApp} from 'vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/aura-dark-green/theme.css';
import 'primeicons/primeicons.css';
import './styles/normalize.css';
import './styles/customTheme.css';
import App from './App.vue';


const app = createApp(App);
app.use(PrimeVue);
app.mount('#app');
