<template>
    <header>
        <div 
            class="logo-block" 
            @click="goTo('home')"
        >
            <img 
                :src="require('../assets/img/png/logo.png')"  
                alt="logo"
            >
        </div>

        <header-menu
            :class="{ 'active': isMenuOpened }" 
            class="menu-block" 
        />
        
        <social-media class="social-media" />
        <btn-menu 
            class="menu-btn"
        />
    </header>    
</template>

<script>
import HeaderMenu from './AppHeaderMenu.vue'
import SocialMedia from './AppHeaderSocialMedia.vue'
import BtnMenu from './AppHeaderBtnMenu.vue'
import { mapGetters } from 'vuex';


export default {
    name: 'AppHeader',
    components: { 
        HeaderMenu,
        SocialMedia,
        BtnMenu
    },
    computed: {
        ...mapGetters([
            'isMenuOpened'
        ])
    },
    methods: {
        goTo(pathName) {
            this.$router.push({name: pathName});
        }
    }
}
</script>

<style lang="scss" scoped>

header {
    background-color: rgb(255, 178, 122);
    box-shadow: 4px 2px 10px 3px rgba(98, 47, 0, 0.4);
    display: flex;
    height: 54px;
    @media (max-width: $mobile-max) {
        box-shadow: none;
        height: 60px;
    } 
}
.logo-block {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 5px 20px;
    :hover {
        margin-bottom: 5px;
    } 
}
.menu-block {
    flex-grow: 1;
    margin: 0 20px;
    color: white;
    @media (max-width: $mobile-max) {
        background-color: rgb(255, 178, 122);
        margin: 0;
        transition: 0.5s;
        transform: translateY(-100%);
        &.active {
            transform: translateY(0%);
        }
    } 
}
.social-media {
    margin: 5px 20px;
    @media (max-width: $mobile-max) {
        display: none;
    } 
}
.menu-btn {
    z-index: 4;
    cursor: pointer;
    position: absolute;
    right: 16px;
    top: 16px;
    width: 32px;
    height: 32px;
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        left: 43px;
    }   
}
</style>