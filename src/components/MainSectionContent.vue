<template>
    <main>
        <h1>
            <span class="content-title">
                Каршеринг
            </span>
            <br> 
            <span class="content-brand">
                Need for drive
            </span>         
        </h1>
        <p class="content-description">
            Поминутная аренда авто твоего города
        </p>
        <button 
            class="content-button"
        >
            Забронировать
        </button>
    </main>
</template>

<script>

export default {
    name: 'MainSectionContent',
}
</script>

<style lang="scss" scoped>

    main {
        border: 1px solid black;
        padding: auto;
        &-title {
            color: black;
        }
        &-brand {
            color: green;
        }
    }
    h1 {
        font-size: 70px;
        line-height: 66px;
        margin-bottom: 34px;
        @media (max-width: 767px) {
            line-height: 110%;
            font-size: 32px;
            margin-bottom: 16px;            
        }
    }
    .content-description {
        font-weight: 300;
        font-size: 26px;
        color: grey;
        margin-bottom: 60px;
        @media (max-width: 767px) {
            font-size: 18px;
            line-height: 21px;
            margin-bottom: 32px;           
        }
    }
    .content-button {
        width: 250px;
        height: 48px;
        background: linear-gradient(90deg, green 2.61%, rgb(0, 104, 0) 112.6%);
        background-blend-mode: darken;
        box-shadow: 0px 2px 4px black;
        border-radius: 8px;
        font-weight: 500;
        font-size: 18px;
        color: white;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 767px) {
            box-shadow: none;
            width: 100%;
            height: 50px;
            border-radius: 0;
            position: absolute;
            left: 0;
        }
    }

</style>



