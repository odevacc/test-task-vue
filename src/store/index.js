import { createStore } from 'vuex'
import citiesM from './citiesModule'

export default createStore({
    modules: {
        cities: citiesM
    }
})