<template>

     <button class="btn-secundario">{{ name }}</button>
 
</template>
<script>
export default {
  name:"TurnosGuardar",
  props: {   
    name:{
      type: String,
      default:"Salir"
    }
  }
}
</script>
