<template>
<div>
  <Header />
  <div class="content">
  <div class="catalog__app" @click.stop="this.isShown = !this.isShown">
    <img class="svg" v-if="this.isShown" src="@/common/img/close.svg">
    <img class="svg" v-else src="@/common/img/grid.svg">Каталог
  </div>
  <Catalog v-show="this.isShown" v-model:isShown="isShown" />
  <div v-show="!this.isShown">
  <Menu/>
  <Audience/>
  </div>
  </div>
  <footer>Тестовое задание для Аксон.</footer>
</div>
</template>

<script>

import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
import Audience from "./components/Audience.vue";
import Catalog from "./components/Catalog.vue";
import { mapState, mapActions } from 'vuex';
import vClickOutside from 'click-outside-vue3'

export default {
  name: "App",
  components: {
    Header, Menu, Audience, Catalog
  },
  directives: {
      clickOutside: vClickOutside.directive
    },
  data () {
    return {
      isShown: false
    }
  },
  computed: {
    ...mapState({
        currentCity: state => state.cities.currentCity,
        currentCityCode: state => state.cities.currentCityCode
    }),
    
  },
  methods: {
    ...mapActions(['getCities','getCityStats']),
    toggleIsShown(){
      this.isShown = false
    }
  },
  mounted() {
    this.getCities()
    this.getCityStats(this.currentCityCode)
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: "Open Sans", sans-serif;
  display: block;
  box-sizing: border-box;
}
footer{
  height: 2rem;
  display: flex;
  background: linear-gradient(90deg, #0099dc 0%, #9f1c6e 62.5%, #ff0803 100%);
  align-items: center;
  min-width: 75rem;
  color: white;
  justify-content: center;
  font-size: 0.75rem;
}
.content {
  min-height: 89.8vh;
  margin-bottom: 1rem;
  width: 75rem;
  margin-left: auto;
  margin-right: auto;
}
.catalog__app {
  border: 1px solid #c7cad1;
  width: 8rem;
  height: 2.5rem;
  border-radius: 4px;
  margin-top: 1rem;
  /* margin-left: auto;
  margin-right: auto; */
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-around;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #23252a;
}
.svg {
  width: 1.25rem;
}
</style>
