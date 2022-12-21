<template>
    <section class="pt-32 lg:flex">
        <div class="w-full lg:w-1/2 relative">
            <img :src="`images/pic-4.webp`" alt="" class="w-80 rounded-md">
            <img :src="`images/pic-5.webp`" alt="" class="w-80 rounded-md absolute bottom-[-30px] lg:bottom-0 right-0 md:right-10">
        </div>
        <div class="w-full lg:w-1/2 pt-10">
            <p class="font-miniver text-accent text-lg">Kenapa harus kami</p>
            <h1 class="text-5xl text-header font-roboto font-bold mt-2">Kenapa kami yang terbaik?</h1>
            <p class="mt-8">Doyan Seafood menggunakan bahan olah yang 100% fresh dari para nelayan. Sebelum diolah, bahan dibersihkan hingga higenis untuk selanjutnya dimasak oleh koki yang berpengalaman. Berbagai rempah tradisional yang digunakan menjadikan masakan kami yang terbaik.</p>
            <p class="mt-4">Selain itu, kami menyediakan layanan offline dan online yang profesional layaknya restaurant berbintang.</p>
            <div class="grid grid-cols-1 gap-4 mt-8 min-[440px]:grid-cols-2">
                <div class="shadow-md border-accent border-l-4 p-3 rounded-md flex items-center">
                    <img :src="`./icons/Truck.svg`" alt="">
                    <h1 class="ml-4 font-bold text-xl">Pengiriman cepat</h1>
                </div>
                <div class="shadow-md border-accent border-l-4 p-3 rounded-md flex items-center">
                    <img :src="`./icons/Timer.svg`" alt="">
                    <h1 class="ml-4 font-bold text-xl">Layanan 24/7</h1>
                </div>
                <div class="shadow-md border-accent border-l-4 p-3 rounded-md flex items-center">
                    <img :src="`./icons/Hamburger.svg`" alt="">
                    <h1 class="ml-4 font-bold text-xl">Masakan fresh</h1>
                </div>
                <div class="shadow-md border-accent border-l-4 p-3 rounded-md flex items-center">
                    <img :src="`./icons/Factory.svg`" alt="">
                    <h1 class="ml-4 font-bold text-xl">Kualitas terjaga</h1>
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