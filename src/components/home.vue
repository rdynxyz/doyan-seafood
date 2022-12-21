<template>
    <section class=" lg:h-[440px] lg:flex ">
        <!-- header -->
        <div class="w-full lg:w-1/2 flex flex-col justify-center items-start z-30">
            <p class="font-miniver text-lg text-accent">Makanan Sehat $ Lezat</p>
            <h1 class="mt-2 text-6xl text-header font-bold font-roboto md:w-[560px]">Nikmati Hidup Sehat & Makanan Lezat.</h1>
 
            <p class="mt-8 min-[450px]:w-[424px]">Dengan Doyan Seafood, nikmati makanan lezat yang tetap sehat untuk tubuh Anda</p>
            <div class="mt-8">
                <button class="px-10 py-3 rounded-md border bg-accent text-white font-bold"><a href="">Order sekarang</a></button>
            </div>
        </div>
        <!-- home display -->
        <div class="w-full lg:w-1/2 relative pt-10 lg:pt-0">
            <img :src="`./images/home-display.webp`" alt="" class="z-30 absolute w-[550px] md:top-10 md:right-10">
            <!-- <div class=" w-full md:w-[300px] h-[300px] rounded-full border-[10px] border-accent lg:absolute top-[-50px] right-[100px]"></div> -->
            <img :src="`./icons/Slada.svg`" alt="" class="w-[700px]">
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>