<template>
    <footer class="w-full  bg-slate-200 text-header py-20 px-5">
        <div class="container grid grid-cols-3 m-auto">
            <div class="">
                <h1 class="font-bold text-2xl">Doyan Seafood</h1>
                <p class="mt-6">Subscribe our newsletter and get discount 25%off</p>
                <div class="flex mt-6">
                    <input type="email" name="" placeholder="Enter your email" class="focus:outline-none pl-4 rounded-l-md p-2 w-[220px]">
                    <button class="bg-accent px-3 rounded-r-md"><img :src="`icons/Send.svg`" alt=""></button>
                </div>
            </div>
            <div class="">
                <h1 class="font-bold text-2xl">Contact us</h1>
                <span><img :src="`./icons/MapPin.svg`" alt=""></span>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>