<template>
    <section id="about-us" class="pt-32 lg:flex ">
        <div class="w-full lg:w-1/2 flex">
            <div class="">
                <img :src="`./images/pic-1.webp`" alt="" class="w-[300px] rounded-md"/>
            </div>
            <div class="ml-5 mt-16">
                <img :src="`./images/pic-2.webp`" alt="" class="w-[300px] rounded-md">
                <img :src="`./images/pic-3.webp`" alt="" class="w-[300px] rounded-md mt-5">
            </div>
        </div>
        <!-- about us -->
        <div class="w-full lg:w-1/2 flex flex-col justify-center lg:pl-20">
            <p class="text-lg font-miniver text-accent">About Us</p>
            <h1 class="text-5xl font-bold font-roboto text-header mt-2">Food is an important <br> part Of a balanced Diet</h1>
            <p class="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis  vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <div class="">
                <button class="px-10 py-3 rounded-md bg-accent text-white font-bold mr-4 mt-8"><a href="">Show more</a></button>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>