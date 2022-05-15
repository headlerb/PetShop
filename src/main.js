//Aquí estamos importando nuestro archivo de enrutador, y luego usamos useel enrutador al crear nuestra aplicación
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../src/styles/styles.scss';

createApp(App)
.use( store )
.use(router)
.mount('#app')
