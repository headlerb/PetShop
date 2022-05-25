<!-- <router-view />- Cuando se navega por una ruta en el navegador, aquí es donde se representa el componente. --> 
<template>
  <div id="app">
     <headerPrincipal />
        <router-view class="container"></router-view>
    <footer>
        <span >💻 <a href=""> By Ariel Bedoya</a></span>     
      </footer>
  </div>
</template>

<script>
//import { defineAsyncComponent } from 'vue' // Carga un componente cuando sea necesario
import headerPrincipal from '@/shared/components/headerPrincipal.vue'
export default {
   name: 'app',
   components: { headerPrincipal},
   //components: {
    //headerPrincipal: defineAsyncComponent(() =>  import('@/shared/components/headerPrincipal.vue'))
  //}
}
</script>
<style lang="scss" scoped>

  footer {
    box-sizing: border-box;
    background-color: #3a4c53;
    bottom: 0;
    left: 0;
    padding: 1rem;
    position: absolute;
    width: 100%;
    text-align:center;  
    a {
      text-decoration: none;
      color: #b3bec3;
    }   
  }
  #app {
  
    box-sizing: border-box;
    color: #37474f; 
    margin: 0 auto;
    padding: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  .container {       
        width: 97%;
        height: 97%;
        margin: auto;
   
  }
</style>

