<template>
    <section class="pt-32 lg:flex">
        <div class="w-full lg:w-1/2 relative">
            <img :src="`images/pic-4.webp`" alt="" class="w-80 rounded-md">
            <img :src="`images/pic-5.webp`" alt="" class="w-80 rounded-md absolute bottom-0 right-10">
        </div>
        <div class="w-full lg:w-1/2 pt-10">
            <p class="font-miniver text-accent text-lg">Why choose us</p>
            <h1 class="text-5xl text-header font-bold mt-2">Why We are the best?</h1>
            <p class="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum
                non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque
                massa congue</p>
            <div class="grid grid-cols-1 gap-4 mt-8 min-[440px]:grid-cols-2">
                <div class="shadow-md border-accent border-l-4 p-3 rounded-md flex items-center">
                    <img :src="`./icons/Truck.svg`" alt="">
                    <h1 class="ml-4 font-bold text-xl">Fast Delivery</h1>
                </div>
                <div class="shadow-md border-accent border-l-4 p-3 rounded-md flex items-center">
                    <img :src="`./icons/Timer.svg`" alt="">
                    <h1 class="ml-4 font-bold text-xl">24/7 Services</h1>
                </div>
                <div class="shadow-md border-accent border-l-4 p-3 rounded-md flex items-center">
                    <img :src="`./icons/Hamburger.svg`" alt="">
                    <h1 class="ml-4 font-bold text-xl">Fresh Food</h1>
                </div>
                <div class="shadow-md border-accent border-l-4 p-3 rounded-md flex items-center">
                    <img :src="`./icons/Factory.svg`" alt="">
                    <h1 class="ml-4 font-bold text-xl">Quality maintain</h1>
                </div>
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