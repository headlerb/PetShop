import { createStore } from 'vuex'

import Pet from '../modules/peluqueria/store/pet'
const store = createStore({
    modules: {
        Pet
    }
   
})

export default store