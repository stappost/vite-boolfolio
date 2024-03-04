<script>

import {store} from './store.js';
import axios from 'axios';


export default {
    data() {
        return {
            store,
            projects: [],
            currentPage: 1,
            LastPage: null
        }
    },
    created(){
        this.getProject()
    },
    methods: {
        getProject() {
            axios.get(`${this.store.baseUrl}/api/projects`).then((response) => {
                console.log(response.data.results);
            })
        }
    }
}
</script>
<template lang="">
    <div>
        
    </div>
</template>
<style lang="scss">
    
</style>