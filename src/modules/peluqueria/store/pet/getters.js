//export const myGetter= ({ state })=>{
//    return state
//}
//Getters para obtener información del state
export const getDatosMbusqueda= ( state ) =>( busqueda ='' ) => {
    console.log(busqueda)
    console.log(state.TurnosMascotas)
    if (busqueda.length ===0) return state.TurnosMascotas
    return state.TurnosMascotas.filter(datosM =>datosM.nombre_mascota.toLowerCase().includes(busqueda.toLocaleLowerCase()))

}
export const getDatosMId = ( state ) => ( id = '' ) => {

    const datosM = state.TurnosMascotas.find( datosM => datosM.id === id )

    if ( !datosM ) return

    return { ...datosM } // TODO: prueben
}

