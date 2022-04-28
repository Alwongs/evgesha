<template>
    <div class="slider-section">
        <h1>Slider Section</h1>
    </div>
</template>

<style lang="scss" scoped>

.slider-section {
    background-color: rgb(217, 225, 211);
    width: 50%;
    @media (min-width: $desktop-min) and (max-width: $desktop-max) {
        width: 43%;
    }
    @media (min-width: $tablet-min) and (max-width: $tablet-max) {
        display: none;
    }
    @media (max-width: $mobile-max) {
        display: none;
    }     
}
</style>