<script>
export default {
    
}
</script>
<template lang="">
    <div class="bg-image pt-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center py-5 mt-5"> Benvenuto in Boolfolio</h1>
                </div>
                <div class="col-12">
                    <p class="text-center text-white">Guarda i progetti e facci sapere cosa ne pensi</p>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-8 my-4">
                <h3>Qualcosa in più su di me</h3>
                <p class="fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vero debitis labore! Vitae rem possimus saepe nam, cupiditate maiores libero blanditiis quo quia tenetur dignissimos doloribus ipsa odit a quam.</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .bg-image{
        background-image: url('https://www.iquadroingegneria.it/wp-content/uploads/2015/09/Portfolio-749x364.gif');
        background-size: cover;
        background-attachment: fixed;
        min-height: 600px;
        color: #fff;
        .container{
            background-color: rgba(0,0,0,0.3);
            padding-bottom: 20px;
            h1{
                font-size: 80px;
            }
            p{
                font-size:30px
            }
        }

    }
</style>