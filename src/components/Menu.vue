<template>
<div class="wrap">
    <div class="menu">
    <span v-for="items in menu" v-bind:key="items.url">
        <a v-bind:title="items.title" v-bind:href="items.url" target="_blank">{{items.title}}</a>
    </span>
    </div>
</div>
</template>

<script>
export default {
data() {
  return {
menu: [
  {title: "Акции", url: "https://akson.ru/stock/"}, 
  {title: "Готовые решения", url:"https://akson.ru/ready_made_solutions/"},
  {title: "Новый год", url:"https://akson.ru/c/novyy_god/"}, 
  {title: "Строительные материалы", url:"https://akson.ru/c/stroitelnye_materialy/"}, 
  {title: "Керамическая плитка", url:"https://akson.ru/c/keramicheskaya_plitka/"}, 
  {title: "Краски", url:"https://akson.ru/c/kraski/"}, 
  {title: "Сантехника", url:"https://akson.ru/c/santehnika/"}, 
  {title: "Товары для дома", url:"https://akson.ru/c/tovary_dlya_doma/"}
  ],
}
}
}
</script>

<style scoped>
.menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
}
.menu a {
    color: #23252a;
    text-decoration: none;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: normal;
}
.menu a:hover {
    color: #52545c;
}
</style>
