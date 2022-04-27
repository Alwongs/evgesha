<template>
    <div class="left-side">
        <div class="left-side__header">Menu</div>
        <div class="left-side__footer">Eng</div>
    </div>
</template>

<script>

export default {
    name: 'LeftSide'
}
</script>

<style lang="scss" scoped>

.left-side {
    position: relative;
    background-color: black;
    min-width: 64px;
    height: 100%;
    &__header {
        color: white;
        position: absolute;
        top: 32px;
        left: 50%;
        transform: translate(-50%)
    }
    &__footer {
        color: white;
        position: absolute;
        bottom: 32px;
        left: 50%;
        transform: translate(-50%)
    }
}


</style>