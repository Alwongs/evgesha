<template>
    <header class="header">
        <div class="header__logo">
            <router-link to="/" >Need for drive</router-link> 
        </div>
        <div class="header__map">
            Ульяновск
        </div>
    </header>
</template>

<script>

export default {
    name: 'MainSectionHeader'
}
</script>

<style lang="scss" scoped>

    .header {
        border: 1px solid black;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 32px;
        @media (max-width: 767px) {
            flex-direction: column;
            align-items: flex-end;
        }
    }    
    .header__logo {
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        @media (max-width: 767px) {
            text-align: right;
        }
        a {
            color: green;
        }
    }
    .header__map {
        font-size: 14px;
        color: grey;
        display: flex;
        align-items: center;
        background-image: url("../assets/img/svg/map_out.svg");
        background-repeat: no-repeat;
        padding-left: 25px;
        height: 20px;

        @media (max-width: 767px) {
            justify-content: flex-end;
        }
        img {            
            margin-right: 4px;
            width: 15px;
        } 
        .location {
            font-weight: 400;
            line-height: 3;
            vertical-align: middle;
        }
    }
</style>

