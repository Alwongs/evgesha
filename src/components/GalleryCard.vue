<template>
    <div 
        class="gallery-card"
    >
        <header>
            <h2>{{ item.title }}</h2>
        </header>
        <div class="img-block">
            <img 
                :src="require('../assets/img/jpg/' + item.img)" 
                alt="Slide picture"
            >
        </div>
        <footer>
            <p>
                Like
            </p>
            <button>Заказать</button>
        </footer>
    </div>
</template>

<script>

export default {
    name: 'GalleryCard',
    props: [ 'item' ]
}
</script>

<style lang="scss" scoped>

.gallery-card {
    background-color: rgb(255, 178, 122);
    border: 2px solid rgb(255, 178, 122);
    box-shadow: 4px 2px 10px 3px rgba(98, 47, 0, 0.4);
    border-radius: 10px;
    height: fit-content;
    margin: 24px;
    @media (max-width: $mobile-max) {
        border: none;
        border-radius: 0;
        background-color: rgba(255, 178, 122, 0.4);
        box-shadow: none;
        margin: 16px;
    } 
}

header {
    padding: 10px;
    h2 {
        font-weight: 500;
        color: rgb(255, 255, 255);
        cursor: pointer;
        &:hover {
            font-weight: 700;
            color: rgb(86, 227, 255);
        }
    }
}

.img-block {
    width: 250px;
    height: 250px;
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
    }
    :hover {
        padding: 2px;
    }
    @media (max-width: $mobile-max) {
        width: 100%;
        height: 100%;
    } 
}


footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 46px;
    padding: 0 10px;
    p {
        font-weight: 500;
        color: rgb(0, 122, 0);
        padding-left: 4px;
        padding-top: 4px;
        cursor: pointer;
        &:hover {
            font-weight: 700;
            color: rgb(3, 213, 255);
        }
    }
    button {
        background-color: rgb(53, 165, 213);
        width: fit-content;
        height: 30px;
        padding: 0 10px;
        border-radius: 7px;
        color: white;
        &:hover {
                    height: 32px;
            border: 1px solid yellow;
        }
    }
}
</style>