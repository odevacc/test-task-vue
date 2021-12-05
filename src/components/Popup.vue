<template>
<div class="main">
    <div class="popup"  v-if="isVisible" v-click-outside="hidePopup">
        <h2>Ваш город {{currentCity}}</h2>
        <Loader class="loader" v-if="isLoading"/>
        <div v-else>
        <input class="input" ref="search" type="text" v-model="value" placeholder="Введите город" />
        <div class="cities">
        <div class="city" v-for="city in filteredCities" v-bind:key="city.name" @click="toggleCity(city)">{{city.name}}</div>
        </div>
        <div class="help-div">Не нашли свой населенный пункт в списке? Воспользуйтесь <span class="search-btn">поиском</span>.</div>
        </div>
        </div>
    </div>
</template>

<script>

import Loader from './loader/Loader.vue'
import vClickOutside from 'click-outside-vue3'
import { mapState, mapMutations, mapActions} from 'vuex'

export default {
    components: {
    Loader
    },
    props: {
        isVisible: {
            type: Boolean
        }
    },
    directives: {
      clickOutside: vClickOutside.directive
    },
    data() {
        return {
            value: ''
        }
    },
    computed: {
    ...mapState({
        isLoading: state => state.cities.isLoading,
        currentCity: state => state.cities.currentCity,
        cities: state => state.cities.cities
    }),
    filteredCities() {
            return this.cities.filter(city => {
                return city.name.toLowerCase().includes(this.value.toLowerCase())
            })
        }
    },
    methods: {
    ...mapMutations(['setCurrentCity']),
    ...mapActions(['getCityStats']),
        hidePopup() {
            this.$emit('update:isVisible', false)
        },
        toggleCity(e){
            this.setCurrentCity(e.name)
            this.getCityStats(e.code)
            this.hidePopup()
        }
    }
    
}
</script>

<style scoped>
.popup {
    justify-content: center;
    background: white;
    padding: 2rem 1.5rem;
    position: fixed;
    top: 1.8rem;
    width: 40rem;
    box-sizing: border-box;
    box-shadow: 0px 6px 9px #7c7c7c;
    border-radius: 0 0 8px 8px;
    letter-spacing: 0.5px;
}
.cities{
    display: grid;
    justify-content: space-between;
    grid-template-columns: 12.5rem 12.5rem 12.5rem;
}
.city {
    font-size: 0.875rem;
    cursor: pointer;
    padding: 0.5rem;
    color: #3a3e46;
}
.city:hover {
    color: #0099dc;
}
.input {
    margin: 1rem 0;
    padding: 1rem 0.75rem;
    border-radius: 5px;
    font-size: 1rem;
    border: 1px solid rgb(202, 202, 202);
}
.help-div {
    padding-top: 1rem;
    color: #9da2ae;
}
.search-btn {
    text-decoration: underline;
    cursor: pointer;
}
.search-btn:hover {
    color: #0099dc;
}
.loader {
    margin: 5rem 0 3rem 17rem;
}
</style>
