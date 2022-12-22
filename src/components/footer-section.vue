<template>
    <footer class="w-full  bg-slate-200 text-header ">
        <div class="container grid grid-cols-1 gap-14 py-20 lg:grid-cols-3 m-auto px-5">
            <div class="">
                <h1 class="font-bold text-2xl">Doyan Seafood</h1>
                <p class="mt-6">Mau dapat info discount ke email Anda?</p>
                <div class="flex mt-6">
                    <input type="email" name="" placeholder="Alamat email"
                        class="focus:outline-none pl-4 rounded-l-md p-2 w-[220px]">
                    <button class="bg-accent px-3 rounded-r-md"><img :src="`icons/Send.svg`" alt=""></button>
                </div>
            </div>
            <div class="">
                <h1 class="font-bold text-2xl">Kontak Kami</h1>
                <div class="mt-6 flex">
                    <img :src="`./icons/MapPin.svg`" alt="">
                    <p class="ml-2">Rungkut, Surabaya, Jawa Timur</p>
                </div>
                <div class="mt-4 flex">
                    <img :src="`./icons/Phone.svg`" alt="">
                    <p class="ml-2">+62 965-9665-9986</p>
                </div>
                <div class="mt-4 flex">
                    <img :src="`./icons/Email.svg`" alt="">
                    <p class="ml-2">doyanseafood@gmail.com</p>
                </div>
                <div class="mt-4 flex">
                    <img :src="`./icons/Clock.svg`" alt="">
                    <p class="ml-2">Senin - Minggu / 10.00 - 21.00 WIB</p>
                </div>
            </div>
            <div class="">
                <h1 class="font-bold text-2xl">Galeri Instagram</h1>
                <div class="grid grid-cols-3 gap-1 mt-6">
                    <img :src="`./images/ds1.webp`" alt="">
                    <img :src="`./images/ds2.webp`" alt="">
                    <img :src="`./images/ds3.webp`" alt="">
                    <img :src="`./images/ds4.webp`" alt="">
                    <img :src="`./images/ds5.webp`" alt="">
                    <img :src="`./images/ds6.webp`" alt="">
                </div>
            </div>
        </div>
        <div class="w-full py-5 font-normal text-sm min-[450px]:text-base bg-accent flex items-center justify-center text-white">
            <h1>Copyright ©2022.doyanseafood All rights reserved</h1>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>