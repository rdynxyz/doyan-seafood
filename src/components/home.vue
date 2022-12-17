<template>
    <section class=" lg:h-[440px] lg:flex ">
        <!-- header -->
        <div class="w-full lg:w-1/2 flex flex-col justify-center items-start z-30">
            <p class="font-miniver text-lg text-accent">Healthy & Testy Food</p>
            <h1 class="mt-2 text-6xl text-header font-bold font-roboto">Enjoy Healthy Life <br> & Testy Food.</h1>
            <p class="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Varius sed pharetra dictum neque massa congue</p>
            <div class="mt-8">
                <button class="px-10 py-3 rounded-md bg-accent text-white font-bold mr-4"><a href="">Show more</a></button>
                <button class="px-10 py-3 rounded-md border border-accent text-accent font-bold"><a href="">Order now</a></button>
            </div>
        </div>
        <!-- home display -->
        <div class="w-full lg:w-1/2 relative pt-10 lg:pt-0">
            <img :src="`./images/home-display.webp`" alt="" class="z-20 absolute w-[600px] ">
            <img :src="`./images/abstract.svg`" alt="" class="w-[600px] lg:absolute lg:top-[-50px] lg:right-[-50px] z-10">
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>