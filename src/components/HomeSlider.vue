<template>
    <div class="wrapper-slider">
        <slider-pictures @toggleSlide="toggleSlide"/>
        <div class="slider-footer">
            <div class="dots-group">
                <div
                    v-for="item in slider_data"
                    :key="item.id"
                    class="slider-footer-dot"
                    :class="{'selected-slide': item.id === currentSlideIndex + 1}"
                    @click="selectSlide(item.id)" 
                ></div>
            </div>
        </div>
        <button 
            @click="prevSlide"            
            class="btn-slider btn-slider-prev"
        ></button>
        <button 
            @click="nextSlide"             
            class="btn-slider btn-slider-next"
        ></button>         
    </div>
</template>

<script>
import SliderPictures from './HomeSliderPictures.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'HomeSlider',
    components: { SliderPictures },
    data() {
        return {
            interval: null,
            isPaused: false
        }
    },
    computed: {
        ...mapGetters([ 
            'slider_data',
            'currentSlideIndex' 
        ])
    },
    methods: {
        ...mapMutations([ 'UPDATE_SLIDE_INDEX' ]),
        selectSlide(id) {
            this.UPDATE_SLIDE_INDEX(id - 1);
        },
        prevSlide() {
            if (this.currentSlideIndex >= 1) {
                this.UPDATE_SLIDE_INDEX(this.currentSlideIndex - 1);
            }
        },
        nextSlide() {
            if (this.currentSlideIndex >= this.slider_data.length - 1) {
                this.UPDATE_SLIDE_INDEX(0);
            } else {
                this.UPDATE_SLIDE_INDEX(this.currentSlideIndex + 1);
            }
        },
        toggleSlide() {
            this.isPaused = !this.isPaused
            if(!this.isPaused) {
                this.startSlide();
            } else {
                this.stopSlide();
            }
        },
        startSlide() {
            this.interval = setInterval(() => {
                    this.nextSlide();
            }, 3500);
        },
        stopSlide() {
            clearInterval(this.interval)
        }
    },
    created() {
        this.startSlide();
    }
}
</script>

<style lang="scss" scoped>

.wrapper-slider {
    height: 100%;
    position: relative;
    overflow: hidden;
}

.slider-footer {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding-bottom: 32px;
    display: flex;
    align-items: center;
    z-index: 2;
}
.dots-group {
    margin: auto;
    display: flex;
}
.slider-footer-dot {
    background-color: $white;
    border: 1px solid $grey;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    margin: 0 6px;
    cursor: pointer;
    z-index: 1;
}
.selected-slide {
    background-color: $green;
        border: 1px solid $black;
}
.btn-slider { 
    z-index: 2;
    position: absolute;
    top: 0;
    width: 64px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: url('../assets/img/svg/arrow_prev.svg') no-repeat center;
    &:hover {
        background-color: $bg-slider-button-hover;
    }
    &-prev {
        left: 0;     
    }
    &-next {
        right: 0;
        transform: rotate(180deg);      
    }
}
</style>