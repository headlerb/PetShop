//Mutations para actualizar el State
export const SetDatosM= (/*state*/)=>{

}

export const UpdateDatosM = ( state, entry  ) => { 

    const idx = state.TurnosMascotas.map( e => e.id ).indexOf( entry.id )
    state.TurnosMascotas[idx] = entry
    
}
export const CreateDatosM = (state, entry ) => {
    // state -> entries  -> la nueva entrada debe de ser la primera
    
    state.TurnosMascotas = [ entry, ...state.TurnosMascotas  ]
   // console.log( state.TurnosMascotas)
}