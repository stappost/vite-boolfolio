<script>

import {store} from '../store.js';
import axios from 'axios';
import ProjectCard from './ProjectCard.vue'

export default {
    components:{
        ProjectCard,
    },
    data() {
        return {
            store,
            projects: [],
            currentPage: 1,
            lastPage: null
        }
    },
    created(){
        this.getProject()
    },
    methods: {
        getProject(page_number) {
            axios.get(`${this.store.baseUrl}/api/projects`, {
                params:{
                   page: page_number
                }
            }).then((response) => {
                this.projects = response.data.results.data;
                this.currentPage = response.data.results.current_page;
                this.lastPage = response.data.results.last_page;
            })
        }
    }
}
</script>
<template lang="">
    <main>
        <div class='container'>
            <div class='row '>
                <div class='col-12'>
                    <h1 class='text-center'>Projects</h1>
                </div>
            </div>
            <div class='row'>
                <ProjectCard v-for="project, index in projects" :key="index" :project="project"/>
            </div>
            <div class='d-flex justify-content-between mt-4'>
                <button class='btn btn-square btn-primary' :class='currentPage == 1 ? "disabled" : "" ' @click='getProject(currentPage-1)'>< precedente</button>
                <button class='btn btn-square btn-primary' :class='currentPage == lastPage ? "disabled" : "" ' @click='getProject(currentPage+1)'>successivo ></button>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
    
</style>