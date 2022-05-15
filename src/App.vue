<!-- <router-view />- Cuando se navega por una ruta en el navegador, aquí es donde se representa el componente. --> 
<template>
  <headerPrincipal />

  <router-view/>
   <footer>
        <p class="footer-content">
            Ariel Bedoya &copy;
        </p>
    </footer>
</template>

<script>
import { defineAsyncComponent } from 'vue' // Carga un componente cuando sea necesario
export default {
   components: {
    headerPrincipal: defineAsyncComponent(() =>  import('@/shared/components/headerPrincipal.vue'))
  }
}
</script>