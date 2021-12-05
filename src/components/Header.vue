<template>
<div>
  <header class="header">
    <div class="wrap">
    <span @click="togglePopup" class="city">{{currentCity}}</span>
     <Popup v-model:isVisible="isVisible"/>
    </div>
  </header>
</div>
</template>

<script>

import Popup from "./Popup.vue"
import { mapState } from 'vuex'

export default {
  components: {
     Popup
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    togglePopup() {
      this.isVisible = !this.isVisible
    }
  },
  computed: {
    ...mapState({
    currentCity: state => state.cities.currentCity
    })
  }
  }
</script>

<style scoped>
.wrap {
  width: 75rem;
  margin-left: auto;
  margin-right: auto;
}
h2 {
  font-size: 2.5rem;
  padding: 2.5rem 0;
  font-weight: 600;
}
.header {
  height: 2rem;
  display: flex;
  background: linear-gradient(90deg, #0099dc 0%, #9f1c6e 62.5%, #ff0803 100%);
  align-items: center;
  min-width: 75rem;
}
.city {
  color: white;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  line-height: 1.5rem;
  position: relative;
}
</style>
