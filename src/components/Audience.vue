<template>
    <div class="wrap">
        <h2>Аудитория сайта</h2>
        <h3>Статистика по городу {{currentCity}}</h3>
        <div class="cont">
            <img src="@/common/img/audience.jpg">
            <div>
            <div class="aud">
                <Loader class="loader" v-if="isLoading"/>
                <strong v-else>{{Math.round(views/1000000)}} млн.</strong>
                <br/>Общее число просмотров страниц за 2021 год
            </div>
            <div class="aud">
                <Loader v-if="isLoading"/>
                <strong v-else>{{Math.round(audience/1000)}} т.</strong>
                <br/>Средняя ежемесячная посещаемость сайта за 2021 год
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import Loader from './loader/Loader.vue'

export default {
    components: {
    Loader
  },
  computed: {
      ...mapState({
        currentCity: state => state.cities.currentCity,
        isLoading: state => state.cities.isLoading,
        views: state => state.cities.currentCityStats.views,
        audience: state => state.cities.currentCityStats.audience,
        currentCityStats: state => state.cities.currentCityStats,
      })
  }
}
</script>

<style scoped>
h2 {
    font-size: 2.5rem;
    padding: 2.5rem 0;
    font-weight: 600;
    text-align: center;
}
h3 {
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;
    padding: 1.25rem 0;
}
strong {
    color: #333;
    font-size: 1rem;
}
.aud {
    margin-bottom: 8px;
    color: #666;
    font-size: 0.8125rem;
    margin: 0.3rem;
}
.cont {
    width: 20rem;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 200px 150px;
    box-sizing: border-box;
}
.loader {
    height: 1rem;
}
</style>