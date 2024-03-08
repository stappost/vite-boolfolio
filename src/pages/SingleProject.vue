<script>
import {store} from '../store.js';
import axios from 'axios';

    export default {
        data() {
            return {
                store,
                project: null
            }
        },
        created(){
            this.GetProjectData()
        },
        methods: {
            GetProjectData() {
                axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
                    this.project = response.data.results;
                    console.log(response.data.results)
                })
            },
        }
    }
</script>
<template lang="">
         <div class="container">
        <div class="row">
            <div class="col-12 text-center mt-5" v-if="this.project != null">
                <h2>{{ this.project.name }}</h2>
                <p>{{ this.project.type ? this.project.type.name : 'Tipo assente' }}</p>
                <div class="my-3">
                    Inizio Progetto: {{ this.project.start_project }}
                    <p>{{ this.project.finish_project ? 'Fine Progetto: ' + this.project.finish_project : '' }}</p>
                </div>
                <p>{{ this.project.description }}</p>
            </div>
            <div class="col-12">
                <div class="d-flex justify-content-center">
                    <router-link :to="{name: 'projects'}">
                                   <button class="btn btn-sm btn-primary"><-- Indietro</button>
                    </router-link>

                    <button class="btn btn-sm btn-primary mx-1"><a
                            href="http://127.0.0.1:8000/login"
                            class="text-light text-decoration-none">
                            Modifica</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>

</style>