<template>
<div class="wrap">
    <div class="grid" v-click-outside="hideCatalog">
        <div class="catalog" v-for="item in catalog" :key="item.name">
            <img class="image" :src='require("@/common/img/imgCatalog/"+item.img)'><div>{{item.name}}</div>
        </div>
    </div>
</div>
</template>

<script>

import vClickOutside from 'click-outside-vue3'

export default {
    data(){
        return {
            catalog: [
                {name: 'Сделай сам', img: "makeBy.webp"},
                {name: 'Готовые решения', img: 'doneSol.webp'},
                {name: 'Новый год', img: 'newYear.webp'},
                {name: 'Строительные материалы', img: 'build.webp'},
                {name: 'Пиломатериалы', img: 'wood.webp'},
                {name: 'Водоснабжение, отопление', img: 'cran.webp'},
                {name: 'Вентиляция', img: 'vent.webp'},
                {name: 'Электротовары', img: 'electr.webp'},
                {name: 'Скобяные изделия', img: 'skob.webp'},
                {name: 'Керамическая плитка', img: 'keram.webp'},
                {name: 'Краски', img: 'color.webp'},
                {name: 'Инструменты', img: 'instr.webp'},
                {name: 'Сантехника', img: 'santeh.webp'},
                {name: 'Отделка стен и потолков', img: 'wall.webp'},
                {name: 'Обои', img: 'wallpaper.webp'},
            ]
        }
    },
  methods: {
      hideCatalog() {
            this.$emit('update:isShown', false)
        },
    },
  directives: {
      clickOutside: vClickOutside.directive
    }
}
</script>

<style scoped>
.grid {
    display: grid;
    justify-content: space-between;
    grid-template-columns: 25rem 25rem 25rem;
}
.catalog {
    text-align: center;
    margin: 1rem;
    padding: 1rem;
    cursor: pointer;
}
.catalog:hover{
    border-radius: 8px;
    background: rgb(250, 250, 250);
}

</style>