<template>
    <button class="btn btn-principal"
    @click="$emit('on:click')"
    
    >{{ name }}       
    </button> 
</template>
<script>
export default {
  name:"TurnosGuardar",
  props: {   
    name:{
      type: String,
      default:"Nuevo Turno"
    }
  }
}
</script>
