<template>
<div class="wrapper">
  <section class="servicios">   
     <div class="titulo" > 
        <h1>Modulo Turnos Peluqueria</h1>
          <input type="text"  v-model="busqueda"
       placeholder="Buscar Mascota"> 
         </div> 
           
  </section>
</div>
 <section class="contenido"> 
    <div  class="flex-item1">      
        <div class="div-busqueda">
              <input type="text"  v-model="IdMascota"           
                  placeholder="Ingrese Mascota"> 
              <input type="text"  v-model="NombrePropietario"
                  placeholder="Ingrese propietario">
              <button class="btn-principal" v-on:click="addQuote">Agregar</button>
          </div>  
      <div class="div-list" >      
          <div   v-for="( Turnos,index) in filterTurnos" :key="index"
            @click="$router.push({ name: 'mascota',params : {id: Turnos.id }})" >
            <div>
                <span>Mascota : {{ Turnos.id }} - Titulo :  {{ Turnos.title }}</span>
            </div>
          </div>     
      </div>
   </div>
    <div class="flex-item2">
       <div>
           <router-view/>
        </div> 
   </div>  
</section>
</template>
<script>
import axios from 'axios';
//https://jsonplaceholder.typicode.com/users/1/todos
    const TurnosActivos2 = [
        { id: 'Samy', propietario: 'Ariel Bedoya',active:true },
        { id: 'Micky', propietario: 'Andres Sepulveda' ,active:true },  
        { id: 'lola', propietario: 'Juan Sepulveda' ,active:true },   
    ]
    console.log(TurnosActivos2)
export default {
    async created() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      this.TurnosActivos=response.data
      console.log(response.data)
    },
    props: {
            pagina:{ 
                type :String
            }
        },
    data(){
        return {
            TurnosActivos:[] ,
            IdMascota:0,
            NombrePropietario:'',
            busqueda:''
        } 
    }    ,
    methods: {
        addQuote() {
          console.log(this.IdMascota)
            this.TurnosActivos.unshift({
                id: this.IdMascota,title:this.NombrePropietario              
            })
        }  
    },
    computed:{
      filterTurnos:function(){
        if (this.busqueda=='') return this.TurnosActivos
        return this.TurnosActivos.filter((Turnos)  => {
          return Turnos.title.match(this.busqueda)
      })
    }
 }
}
</script>
