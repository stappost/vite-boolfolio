<script>
import {store} from '../store.js';
import axios from 'axios';

    export default {
        data() {
            return {
                store,
                project: null,
            }
        },
        created(){
            this.GetProjectData()
        },
        methods: {
            GetProjectData() {
                axios.get(`${this.store.Url}api/project/${this.$route.params.slug}`).then((response) => {
                    this.project = response.data.results;
                    
                })
            },
        }
    }
</script>
<template lang="">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    ciao
                </div>
            </div>
        </div>
</template>
<style lang="scss" scoped>

</style>