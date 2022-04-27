<template>
    <div class="main-section">
        <div class="container">
            <main-section-header class="main-section-header" />
            <main-section-content class="main-section-content" />
            <main-section-footer class="main-section-footer" />
        </div>
    </div>
</template>

<script>
import MainSectionHeader from './MainSectionHeader.vue'
import MainSectionContent from './MainSectionContent.vue'
import MainSectionFooter from './MainSectionFooter.vue'

export default {
    name: 'MainSection',
    components: {
        MainSectionHeader,
        MainSectionFooter,
        MainSectionContent
    }
}
</script>

<style lang="scss" scoped>

.main-section {
    width: 50%;
}
.container {
    max-width: 581px;
    height: 100%; 
    margin: 0 auto;
    display: flex;
    flex-direction: column; 
    .main-section-header {
        flex: 0 0 auto;
        margin-bottom: 19vh;
    }  
    .main-section-content {
        flex: 1 0 auto;
    }  
    .main-section-footer {
        flex: 0 0 auto;
    }  
}
</style>