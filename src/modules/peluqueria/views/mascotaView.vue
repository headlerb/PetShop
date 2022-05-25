<template>
    <template v-if="GetDatosM">
    
        <div class="content">  
            <div class="formulario">   
                <div>
                    <label for="name"> MASCOTA:</label><br>
                   <input type="text"  v-model="GetDatosM.id" :disabled="disabled" >
                </div>
                <div>
                    
                    <input type="text"  v-model="GetDatosM.nombre_mascota"           
                        placeholder="Ingrese Mascota"> 
                </div>
                <div>        
                    <label for="name">PROPIETARIO:</label><br>
                    <input type="text"  v-model="GetDatosM.propietario"
                        placeholder="Ingrese propietario">
                 </div>   
                 <label for="name">OBSERVACIONES:</label><br>     
                <textarea    class="textarea"    
                    v-model="GetDatosM.text"       
                    placeholder="Observaciones"
                >
                </textarea>
                <div>
                    <TurnosGuardar @on:click="ActualizarRegistro" name="Guardar Turno" /> 
                </div>
            </div>     
        </div>
    </template>
</template>
<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex' // computed!!! 
export default {    
        props: {
        id: {
            type: String,
            required: true
        }
    },
     data() {
        return {
            GetDatosM: null  ,
            disabled:true          
        }
    },
    components: {
        TurnosGuardar: defineAsyncComponent(() => import('../componentes/TurnosGuardar.vue')),
    },   
    computed: {
        ...mapGetters('Petmodule', ['getDatosMId'])
    },
    methods: {
         ...mapActions('Petmodule', ['UpdateDatosM','CreateDatosM']),
      dataChange(){
        console.log('texto cambio')
    },
    loadDatosM() {
            let GetDatosM ;
         
            if ( this.id === 'new' ) {
                    this.disabled=false
                    GetDatosM = {
                    nombre_mascota:'',
                    propietario:'',
                    text: '',
                    date: new Date()
                }
            } else {
                this.disabled=true
                GetDatosM = this.getDatosMId( this.id )
               if ( !GetDatosM ) return this.$router.push({ name: 'no-mascota' })
            }
            // console.log(GetDatosM)
            this.GetDatosM = GetDatosM
        },
         async ActualizarRegistro () {
                console.log(this.GetDatosM.id)
            //alert('Guardando Registro')   
            if ( this.GetDatosM.id  ) { 
                this.UpdateDatosM(this.GetDatosM)
            } else {
               console.log("ddd")
                // Crear una nuevo registro
                const id = await this.CreateDatosM ( this.GetDatosM )
                this.$router.push({ name: 'mascota', params: { id } })
        
            }     
        } 
  } ,
 created(){
        //console.log(this.$router)
      //  console.log(this.id)
       this.loadDatosM()
    },
    watch: {
        id() {
            this.loadDatosM()
        }
    }
}
</script>
