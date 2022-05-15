<template>
    <div>
        <div>
            <TurnosPeluqueria />              
        </div>
       
    </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        TurnosPeluqueria: defineAsyncComponent(() => import('../componentes/TurnosPeluqueria.vue'))
    }
}
</script>