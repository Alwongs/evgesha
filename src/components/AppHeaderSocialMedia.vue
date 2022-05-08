<template>
    <ul class="icon-group">
        <li class="icon-item">
            <a href="https://telegram.org/">
                <div class="icon icon__telegram"></div>
            </a>
        </li>
        <li class="icon-item">
            <a href="https://vk.com/evgesh.ulya">
                <div class="icon icon__vk"></div>
            </a>
        </li>
    </ul>    
</template>

<script>
export default {
    name: 'AppHeaderSocialMedia'
}
</script>

<style lang="scss" scoped>

.icon-group {
    display: flex;
    align-items: center;
    li {
        cursor: pointer;
        margin-right: 10px;
    }
    li:last-child {
        margin-right: 0; 
    }
}
.icon {
    width: 32px;
    height: 32px;
    &__telegram {
        background-image: url('../assets/img/svg/telegram.svg');

    }
    &__vk {
        background-image: url('../assets/img/svg/vk.svg');
    }
    &:hover {
        background-color: rgb(187, 95, 30);
        border-radius: 50%;
    }
}
</style>