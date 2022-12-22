<template>
    <section class="flex flex-col pt-32 justify-center">
        <div class="">
            <h1 class="font-roboto font-bold text-5xl text-header text-center">Kategori makanan</h1>
            <p class="text-center mt-2 md:w-[450px] m-auto">Terdapat banyak olahan Seafood yang tersedia di sini, mulai
                dari kepiting, lobster, udang, kerang, cumi dan ikan</p>
        </div>

        <swiper :slidesPerView="4" :spaceBetween="30" :slidesPerGroup="1" :loop="true" :loopFillGroupWithBlank="true"
            :pagination="{
                clickable: true,
            }" :navigation="true" :modules="modules" class="mySwiper flex mt-10 justify-center gap-5 relative">
            <swiper-slide v-for="card in cards" :key="card" class="card w-60 rounded-md">
                <div class="images  h-[200px] overflow-hidden">
                    <img :src="`${card.img}`" alt="" class="w-[100%] rounded-md">
                </div>
                <div class="description     py-4">
                    <h2 class="text-center text-xl font-bold">{{ card.desc }}</h2>
                    <p class="text-center mt-2">{{ card.item }} items</p>
                </div>
            </swiper-slide>
            <div class="w-full h-full flex items-center justify-between absolute">
                <!-- <div class="swiper-button-prev p-4 bg-accent/70 rounded-md"><img :src="`./icons/CaretLeft.svg`" alt=""></div>
                <div class="swiper-button-next p-4 bg-accent rounded-md"><img :src="`./icons/CaretRight.svg`" alt=""></div> -->
            </div>
        </swiper>
    </section>
</template>

<script>
import { registerRuntimeCompiler } from '@vue/runtime-core'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles

import "swiper/css";
// import "swiper/css/navigation";
// import required modules
import {  Navigation } from "swiper";


export default {

    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {


        let cards = [
            { img: 'images/ds1.webp', desc: 'Crab', item: '5' },
            { img: 'images/ds2.webp', desc: 'Lobster', item: '2' },
            { img: 'images/ds3.webp', desc: 'Shell', item: '4' },
            { img: 'images/ds4.webp', desc: 'Squid', item: '1' },
            { img: 'images/ds2.webp', desc: 'Lobster', item: '2' },
            { img: 'images/ds4.webp', desc: 'Squid', item: '1' },
            { img: 'images/ds3.webp', desc: 'Shell', item: '4' },
            { img: 'images/ds4.webp', desc: 'Squid', item: '1' },
            { img: 'images/ds4.webp', desc: 'Squid', item: '1' },
        ]
        return {
            cards,  modules: [Navigation],
        }
    },

}
</script>

<style>

</style>