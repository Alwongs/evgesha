<template>
    <div class="app">
        <app-header class="app-header" />
        <router-view class="app-page"/>
    </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
    name: 'App',
    components: { AppHeader }
}
</script>

<style lang="scss">

.app {
    height: 100vh; 
    display: flex;
    flex-direction: column; 
    justify-content: space-between;  
}
.app-header {
    flex-grow: 0;
}
.app-page {
    flex-grow: 1;
    height: 400px;
}
</style>
