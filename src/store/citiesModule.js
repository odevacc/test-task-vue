import { returnCities, returnStats } from "@/common/fetchData";

const citiesM = {
    state: () => ({
        cities: [],
        currentCity: 'Кострома',
        currentCityCode: 132,
        currentCityStats: {},
        isLoading: false
    }),
    getters: {},
    mutations: {
        setCities(state, cities) {
            state.cities = cities
        },
        setCurrentCity (state, city) {
            state.currentCity = city
        },
        setCurrentCityStats (state, stats) {
            state.currentCityStats = stats
        },
        setIsLoading (state, bool) {
            state.isLoading = bool
        }
    },
    actions: {
        async getCities(context){
            context.commit('setIsLoading', true)
            let res = await returnCities()
            context.commit("setCities", res)
            context.commit('setIsLoading', false)
        },
        async getCityStats (context, code){
            context.commit('setIsLoading', true)
            let res = await returnStats(code)
            context.commit("setCurrentCityStats", res)
            context.commit('setIsLoading', false)
        }
    }

}

export default citiesM;