<script>
import {store} from '../store.js'
    export default {
        data(){
            return{
                store
            }
        }
    }
</script>
<template lang="">
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="d-flex justify-content-between">
                        <h2>Boolfolio</h2>
                        <ul class="list-unstyled d-flex pt-1">
                            <li v-for="item, index in store.menuItem" :key="index" class="mx-3 fs-3">
                                <router-link :to="{name: item.name}" class='text-decoration-none text_dark'>
                                    {{item.label}}
                                </router-link>
                               
                                     
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
    header{
        padding: 20px 0;
        h2{
            font-size: 50px;
        }
        ul{
            li{
                cursor: pointer;
                
                .text_dark{
                    color: rgb(46, 46, 46);
                    &:hover{
                        color: rgb(252, 105, 0);
                    }
                }
            }
        }
    }
</style>