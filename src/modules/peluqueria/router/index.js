export default{   
    name: 'peluqueria',
    component: () => import(/* webpackChunkName: "peluqueria" */ '@/modules/peluqueria/layouts/PeluqueriaLayout.vue'),
    children:[//rutas hijas
        {
            path:'',
            name: 'no-mascota',
            component: () => import(/* webpackChunkName: "peluqueria-no-mascota" */ '@/modules/peluqueria/views/noMascotaSelected.vue')
        },
        {
            path: ':id',
            name: 'mascota',
            component: () => import(/* webpackChunkName: "peluqueria-mascota" */ '@/modules/peluqueria/views/mascotaView.vue'),
            props: ( route ) => {
                return {
                    id: route.params.id
                }
            }
        }
    ]
}
