<template>
    <div  >
        <h3 >Debe Seleccionar un turno</h3>
          <NuevoTurno @on:click="NuevoTurno" name="Agregar un turno" />
    </div>


</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        NuevoTurno: defineAsyncComponent(() => import('../componentes/TurnosGuardar.vue'))
    },
    methods:{
        NuevoTurno(){
            this.$router.push({ name: 'mascota',params : {id: 'new' }}) 
        }
    } 
}
</script>
