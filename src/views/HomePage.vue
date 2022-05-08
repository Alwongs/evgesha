<template>
    <div class="home-page">
        <home-slider class="home-slider" />
        <!--
        <img :src="require('../assets/img/jpg/seventh.jpg')"  alt="">
        -->
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

.home-page {
    background-image: url('../assets/img/jpg/seventh.jpg');
    background-size: cover;
}
.home-slider {
    height: 100%;
    width: auto;
    @media (max-width: $mobile-max) {
        display: none;
    } 
}
img {
    visibility: hidden;
    @media (max-width: $mobile-max) {
        visibility: visible;
        height: 100%;
        width: 100%;
    }     
}
</style>