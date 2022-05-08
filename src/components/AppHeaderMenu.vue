<template>
    <nav>
        <button class="nav-item" @click="goTo('/catalog')">
            Каталог
        </button>
        <button class="nav-item" @click="goTo('/gallery')">
            Галерея     
        </button>
        <button class="nav-item" @click="sayMessage('Контактов пока нет! :)')">
            Контакты     
        </button>
        <social-media  class="nav-item cocial-media-item"/>
    </nav>    
</template>

<script>
import SocialMedia from './AppHeaderSocialMedia.vue'

export default {
    name: 'AppHeaderMenu',
    components: {
        SocialMedia,
    },
    methods: {
        goTo(path) {
            this.$router.push(path);
            this.$store.commit('CLOSE_MENU');
        },
        sayMessage(message) {
            alert(message);
        }
    }
}
</script>

<style lang="scss" scoped>

nav {
    display: flex;
    align-items: center;
    @media (max-width: $mobile-max) {
        position: absolute;
        left: 0;
        top: 0;
        height: 192px;
        width: 100%;
        flex-direction: column;
        justify-content: flex-end;
    } 
}
.nav-item {
    height: fit-content;
    font-size: 20px;
    margin-left: 30px;
    cursor: pointer;
    &:hover {
        background-color: rgb(255, 206, 165);
    }
    @media (max-width: $mobile-max) {
        width: 100%;
        height: 64px;
        margin-left: 0;
        font-size: 24px;
        font-weight: 500;
    } 
}
.cocial-media-item {
    visibility: hidden;
    @media (max-width: $mobile-max) {
        visibility: visible;
        padding-left: 16px;
    } 
}
</style>