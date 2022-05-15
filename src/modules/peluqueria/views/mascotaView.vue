<template>
    <div class="div">        
        <div>
            <span >Dato</span>
        </div>    
    </div>   
    <div class="container">
          <textarea    class="textarea"           
                placeholder="Observaciones"
            ></textarea>
        <div class="btn-holder">
             <TurnosGuardar v-on:click="PressOnclick" name="Guardar" /> 
        </div>
    </div>
</template>


<script>
import { defineAsyncComponent } from 'vue'
export default {    
    components: {
        TurnosGuardar: defineAsyncComponent(() => import('../componentes/TurnosGuardar.vue')),
    },   
    methods: {
    PressOnclick: function () {
      alert('Guardando Registro')      
    }
  } ,
    created(){
        //console.log(this.$router)
    }
}
</script>
<style scoped>



.container {
  background-color: rgb(203, 196, 196);
  width: 100%;
  display: flex;
}
.container .btn-holder {
width: 100%;
  justify-content: flex-end;
  display: flex;
  padding: 10px 25px;
  background-color: rgb(203, 196, 196);
  font-size: 16px;
  border: none;
 
}
.container .textarea { 
    padding: 10px 25px;      
    font-size: 20px;  
    height: 100%;
    width: 100%;
}
</style>