<template>
  <div
    class="container"
    @click="$router.push({ name: 'mascota',params : {id: datosM.id }})" 
    >
      <div>
          <span>{{ datosM.nombre_mascota }} </span>
       </div>
       <div class="description">
         {{ shortText}}
      </div>
  </div>
</template>

<script>
export default {
    props: {
        datosM: {
            type: Object,
            required: true
        }
    }, computed: {
        shortText() {
            return ( this.datosM.propietario.length > 130 )
                ? this.datosM.propietario.substring(0,130) + '...'
                : this.datosM.propietario
        }
    }    
}
</script>
<style lang="scss" scoped>
.container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

  

    .description {
        font-size: 12px;
    }
}

</style>