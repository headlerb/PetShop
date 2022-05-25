<template>
  <section class="DivPrincipal">   
        <h3>Modulo Turnos Peluqueria</h3>   
  </section>
  <section class="contenido">     
    <div  class="flex-item1">   
      <div>
          <input type="text"  v-model="busqueda"
           placeholder="Buscar Mascota"> 
           <button class="btn btn-busqueda"
               @click="$router.push({ name: 'mascota', params: { id: 'new' } })">    
            Nuevo Turno
        </button>
      </div>
      <div class="div-list">
        <TurnosList
          v-for="datos in LoadBusqueda"
          :key="datos.id"
          :datosM="datos"
          />
      </div>
    </div>
    <div class="flex-item2">
       <div>
           <router-view/>
        </div> 
   </div>  
  </section>
</template>
<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters,mapActions } from 'vuex'

export default {
    components: {
      TurnosList: defineAsyncComponent(() => import('./TurnosList.vue'))
    },
    props: {
            pagina:{ 
                type :String
            }
        },
    data(){
      return {
          TurnosActivos:[] ,
          IdMascota:0,
          NombrePropietario:'',
          busqueda:''
      } 
    },
    methods: {
      ...mapActions('Petmodule',['CreateDatosM']),
        addQuote() {
          console.log(this.IdMascota)
            this.TurnosActivos.unshift({
                id: this.IdMascota,title:this.NombrePropietario              
            })
        }  
    },
    computed:{
        ...mapGetters('Petmodule',['getDatosMbusqueda']),
         LoadBusqueda(){
          return this.getDatosMbusqueda(this.busqueda)
    }
    }
}
</script>
