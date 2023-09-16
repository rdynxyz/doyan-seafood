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
            <p class="text-lg font-miniver text-accent">Tentang Kami</p>
            <h1 class="text-5xl font-bold font-roboto text-header mt-2 md:w-[540px]">Makanan adalah bagian penting dari diet seimbang</h1>
            <p class="mt-8">Kami adalah rumah olah Seafood di Surabaya yang mengedepankan kualitas dan keseimbangan komposisi, agar masakan tidak hanya lezat tetapi juga sehat</p>
            <div class="">
                <button class="px-10 py-3 rounded-md bg-accent text-white font-bold mr-4 mt-8 hover:bg-transparent hover:text-accent duration-150 hover:outline hover:outline-accent hover:outline-1"><a href="">Lihat detail</a></button>
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