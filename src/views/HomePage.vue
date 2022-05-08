<template>
    <div class="home-page">
        <home-slider class="home-slider" />
        <img :src="require('../assets/img/jpg/seventh.jpg')"  alt="">
    </div>
</template>

<script>
import HomeSlider from '../components/HomeSlider.vue'

export default {
    name: 'HomePage',
    components: { HomeSlider }
}
</script>

<style lang="scss" scoped>

.home-slider {
    height: 100%;
    width: auto;
    @media (max-width: $mobile-max) {
        display: none;
    } 
}
img {
    height: 100%;
}
</style>