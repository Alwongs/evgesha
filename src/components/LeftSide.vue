<template>
    <aside>
        <div class="aside-bar"></div>
        <div 
            class="aside-bar-item header"
            @click="toggleMenu" 
        >
            Menu
        </div>
        <div class="aside-bar-item footer">
            Eng
        </div>      

        <div 
            class="menu-wrap"
            :class="{ 'active': isOpenMenu }"
        >
            <div class="menu">
                sttg
            </div>
        </div>
    </aside>
</template>

<script>

export default {
    name: 'LeftSide',
    data() {
        return {
            isOpenMenu: false
        }
    },
    methods: {
        toggleMenu() {
            this.isOpenMenu = !this.isOpenMenu;
        }
    }
}
</script>

<style lang="scss" scoped>

.aside-bar {
    position: relative;
    background-color: black;
    min-width: 64px;
    height: 100%;
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        min-width: 86px;
    }
    @media (max-width: $mobile-max) {
        display: none;
    } 
}

.aside-bar-item {
    z-index: 1;
    color: red;
    cursor: pointer;
    position: absolute;
    left: 32px;
    transform: translate(-50%);
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        left: 43px;
    }
    &.header {
        top: 32px;    
    }
    &.footer {
        bottom: 32px;
    }
}

.menu-wrap {
    background-color: rgba(21, 27, 31, 0.81);
    position: absolute;
    left:0;top:0;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    transform: translateX(-100%);
    &.active {
        transform: translateX(0%);
    }
}
.menu {
    background-color: black;
    width: 53%;
    height: 100%;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 60%;
    }
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        width: 100%;
    }
    @media (max-width: $mobile-max) {
        width: 100%;
    }  
}

</style>