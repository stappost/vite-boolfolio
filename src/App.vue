<script>

import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue'


export default {
    components:{
        AppMain,
        AppHeader
    },
    data() {
        return {
            
        }
    }
}
</script>
<template lang="">
    <AppHeader />
    <div>
        <AppMain />
    </div>
</template>
<style lang="scss">
@use './styles/generals.scss';
</style>