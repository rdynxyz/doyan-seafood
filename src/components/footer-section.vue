<template>
    <footer id="footer" class="w-full  bg-gray-100 text-header ">
        <div class="container grid grid-cols-1 gap-14 py-20 lg:grid-cols-3 m-auto px-5">
            <div class="">
                <h1 class="font-bold text-2xl">Doyan Seafood</h1>
                <p class="mt-6">Mau dapat info discount ke email Anda?</p>
                <div class="flex mt-6">
                    <input type="email" name="" placeholder="Alamat email"
                        class="focus:outline-none pl-4 rounded-l-md p-2 w-[220px]">
                    <button class="bg-accent px-3 rounded-r-md"><img :src="`icons/Send.svg`" alt=""></button>
                </div>
                <div class="flex gap-4 mt-6">
                    <a href="https://instagram.com/doyanseafood.sby">
                        <img :src="`./icons/instagram.svg`" alt="">
                    </a>
                    <a href="">
                        <img :src="`./icons/facebook.svg`" alt="">
                    </a>
                    <a href="">
                        <img :src="`./icons/whatsapp.svg`" alt="">
                    </a>
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
                    <p class="ml-2">+62 812-3456-7890</p>
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
        <div class="w-full py-5 font-normal text-sm min-[450px]:text-base bg-accent text-white md:flex md:justify-center md:items-centre">
            <h1 class="text-center">©2022 Doyan Seafood | All Rights Reserved </h1>
            <h1 class="ml-1 text-center"> | Develop by
                <a href="" class="italic">@radyanbintang</a>
            </h1>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>