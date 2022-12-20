<template>
    <section class="pt-32 pb-32 lg:flex">
        <div class="w-full lg:w-1/2 lg:pr-10 lg:pb-0 pb-10">
            <p class="text-lg font-miniver text-accent">Testimonials</p>
            <h1 class="font-roboto text-header font-bold text-5xl mt-2">Customer Review</h1>
            <img :src="`./icons/Quotes.svg`" alt="" class="mt-2">
            <p class="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum
                non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <p class="mt-5 font-bold">Name</p>
        </div>
        <div class="w-full lg:w-1/2 lg:pl-10 relative">
            <img :src="`./images/1088277.webp`" alt="" class="w-[500px] rounded-md">
            <div
                class="absolute left-0 bottom-[-20px] p-5 rounded-md md:w-[434px] bg-white shadow-[4px_0px_40px_0px_rgba(0,0,0,0.11)]">
                <div class="flex justify-between">
                    <h2 class="font-bold text-header mb-2">Order now</h2>
                    <h2 class="font-bold text-header mb-2">IDR 35K</h2>
                </div>
                <img :src="`./icons/Star.svg`" alt="">
                <p class="mt-2">Lorem ipsum dolor sit amet, consectetur elit. Quisque diam pellentesque bibendum fringilla bibendum.
                    Urna, elit augue urna,</p>
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