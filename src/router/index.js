
//directorio de enrutamiento
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import peluqueriaRouter  from '../modules/peluqueria/router'
import noPagefound from  '../modules/shared/pages/noPagefound'


//console.log(peluqueriaRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vacunas',
    name: 'vacunas',    
    component: () => import(/* webpackChunkName: "vacunas" */ '../modules/vacunas/componentes/VacunasView.vue')
  },
  {
    path: '/:pathMatch(.*)*',component: noPagefound 
  },
  {
    path: '/peluqueria',
   // name: 'peluqueria',
  //  component: () => import(/* webpackChunkName: "peluqueria" */ '@/modules/peluqueria/layouts/PeluqueriaLayout.vue'),
      ...peluqueriaRouter     
  }  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
