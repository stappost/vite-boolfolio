<script>
import {store} from '../store.js';
export default {
    name: 'ProjectCard',
    props: {
        project: Object
    },
    data() {
        return {
            store
        }
    }
}
</script>
<template lang="">
    <div class='col-4'>
        <div class="card my-2" style="width: 18rem;">
            <img class="card-img-top" :src="project.logo != null ? `${store.baseUrl}/storage/${project.logo}` : `${store.baseUrl}/placeholder/logo.jpeg`" alt="Card image cap">
            <div class="card-body">
                <h4>{{project.name}}</h4>
                <p class="card-text">{{project.description.substr(0, 50) }}...</p>
            </div>

        </div>
    </div>
</template>

<style lang="">
    
</style>