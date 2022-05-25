
//Acciones para realizar peticiones http
export const loadDatosM=async (/*{ commit }*/)=>{

}
export const UpdateDatosM=async ({ commit }, entrada) => {  // entry debe de ser un parámetro
    console.log(entrada,'actions')
    //const { text } = entrada
  
    commit('UpdateDatosM', { ...entrada })
}
export const CreateDatosM=async ({ state,commit }, entrada)=>{
    console.log(state.TurnosMascotas.length)
    
    const { date, text,nombre_mascota,propietario} = entrada
    
    const dataToSave = { date, text,nombre_mascota,propietario }
    dataToSave.id = state.TurnosMascotas.length +1 +''
    
   
    console.log(dataToSave)
    commit('CreateDatosM', dataToSave )

   return  dataToSave.id
}