<template>
    <div class="gallery-page">
        <div class="gallery-block">
            <gallery-card 
                v-for="item in goods_data" 
                :key="item.id"
                :item="item"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

import GalleryCard from '../components/GalleryCard.vue'

export default {
    name: 'GalleryPage',
    components: { GalleryCard },    
    computed: {
        ...mapGetters([ 
            'goods_data'
        ])
    },
}
</script>

<style lang="scss" scoped>

.gallery-block {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding-top: 16px;
    @media (max-width: $mobile-max) {
        flex-direction: column;
    } 
}
</style>