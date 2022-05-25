import { createStore } from 'vuex'

import Petmodule from '../modules/peluqueria/store/pet/index.js'
const store = createStore({
    modules: {
        Petmodule
    }
   
})
export default store