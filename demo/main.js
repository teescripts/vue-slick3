
import App from './App.vue'
import { createApp } from 'vue'
import router from './plugins/router'
import vuetify from './plugins/vuetify'

import VueSlick3 from '@/VueSlick3'

const app = createApp(App)

app.component('VueSlick3', VueSlick3);
app.use(vuetify);
app.use(router);
app.mount('#app')
