<template>
    <div class="catalog-page">
        <div class="catalog-block">
            <div class="catalog_item">
                <h2 @click="$router.push({ name: 'gallery'})">Игрушки</h2>
                <div class="img-block">
                    <img 
                        :src="require('../assets/img/jpg/first.jpg')"
                        alt=""
                        @click="this.$router.push({ name: 'gallery'})"
                    >
                </div>
            </div>
            <div class="catalog_item">
                <h2 @click="$router.push({ name: 'gallery'})">Пинетки</h2>
                <div class="img-block">
                    <img 
                        :src="require('../assets/img/jpg/second.jpg')" 
                        alt="" 
                        @click="$router.push({ name: 'gallery'})"
                    >
                </div>
            </div>

            <div class="catalog_item">
                <h2 @click="$router.push({ name: 'gallery'})">Погремушки</h2>
                <div class="img-block">
                    <img 
                        :src="require('../assets/img/jpg/third.jpg')" 
                        alt="" 
                        @click="$router.push({ name: 'gallery'})"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CatalogPage'
}
</script>

<style lang="scss" scoped>

.catalog-page {
    padding-top: 64px;
    @media (max-width: $mobile-max) {
        padding-top: 32px;
    } 
}
.catalog-block {
    display: flex;
    justify-content: center;
    @media (max-width: $mobile-max) {
        flex-direction: column;
    } 
}
.catalog_item {
    width: 250px;
    height: 270px;
    margin: 50px;
    @media (max-width: $mobile-max) {
        width: 100%;
        height: 270px;
        margin: 0;
    } 
}
h2 {
    text-align: center;
    color: grey;
    margin-bottom: 20px;
    cursor: pointer;
    &:hover {
        font-size: 26px;
        color: rgb(255, 68, 0);
    }
}
.img-block {   
    width: 200px;
    margin: auto;
    padding: 3px;
    cursor: pointer;
    &:hover {
        padding: 0;
    }
    img {
        width: 100%;
        border-radius: 50%;
    }
}
</style>