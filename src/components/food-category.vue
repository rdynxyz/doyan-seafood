<template>
    <section class="flex flex-col pt-32 justify-center">
        <div class="">
            <h1 class="font-roboto font-bold text-5xl text-header text-center">Rekomendasi</h1>
            <p class="text-center mt-2 md:w-[450px] m-auto">Terdapat banyak olahan Seafood yang tersedia di sini, mulai
                dari kepiting, lobster, udang, kerang, cumi dan ikan</p>
        </div>

        <swiper :breakpoints="swiperOptions.breakpoints" :slidesPerGroup="1" :loop="true" :loopFillGroupWithBlank="true"
            :pagination="{
                clickable: true,
            }" :navigation="true" :modules="modules" class="mySwiper flex mt-10 justify-center gap-5 relative">
            <swiper-slide v-for="card in cards" :key="card" class="card w-60 rounded-md bg-gray-100">
                <div class="images  h-[200px] overflow-hidden">
                    <img :src="`${card.img}`" alt="" class="w-[100%] rounded-md">
                </div>
                <div class="description     py-4">
                    <h2 class="text-center text-xl font-bold">{{ card.desc }}</h2>
                    <p class="text-center mt-2">{{ card.item }}</p>
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

    data () {
      return { // Retourn the API Dates
        APIData: [],
        swiperOptions: {
          breakpoints: {       
      320: {       
         slidesPerView: 1,
         spaceBetween: 20     
      },          
      400: {       
         slidesPerView: 2,       
         spaceBetween: 20     
      },   
      600: {       
         slidesPerView: 3,       
         spaceBetween: 20     
      },   
      771: {       
         slidesPerView: 4,       
         spaceBetween: 30     
      } 
   }   
        }
      }
    },

    setup() {
        
        let cards = [
            { img: 'images/ds3.webp', desc: 'Lobster Jumbo', item: '+ kerang dan cumi' },
            { img: 'images/ds4.webp', desc: 'Kepiting Telur', item: 'Lada hitam' },
            { img: 'images/ds1.webp', desc: 'Kerang Mix', item: 'Lada hitam' },
            { img: 'images/ds6.webp', desc: 'Kepiting Jumbo', item: '+ mix kerang' },
            { img: 'images/ds2.webp', desc: 'Lobster Medium', item: '+ kerang' },
            { img: 'images/ds5.webp', desc: 'Kerang Hijau', item: 'Saus Padang' }
        ]
        return {
            cards,  modules: [Navigation],
        }
    },

}
</script>

<style>

</style>