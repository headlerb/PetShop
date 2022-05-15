<template>
    <div  >
        <h2 >Debe Seleccionar una mascota</h2>
          <TurnosSalir />
    </div>


</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        TurnosSalir: defineAsyncComponent(() => import('../componentes/TurnosGuardar.vue'))
    }
}
</script>
