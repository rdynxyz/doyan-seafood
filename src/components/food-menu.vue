<template>
    <section class="pt-32  flex flex-col">
        <h1 class="text-5xl text-header font-bold font-roboto text-center">Menu masakan kami</h1>
        <div
            class="w-full border-b-[1px] pb-4 mt-10 gap-11 flex md:justify-center text-xl overflow-x-scroll md:overflow-hidden">
            <button @click="loadKepiting"
                class="relative after:contents-[''] after:h-[2px] after:w-0 after:left-0 after:bg-accent after:absolute after:bottom-[-17px] after:duration-300 focus:after:w-full hover:text-accent focus:text-accent cursor-pointer duration-150">Kepiting</button>
            <button @click="loadLobster"
                class="relative after:contents-[''] after:h-[2px] after:w-0 after:left-0 after:bg-accent after:absolute after:bottom-[-17px] after:duration-300 focus:after:w-full hover:text-accent focus:text-accent cursor-pointer duration-150">Lobster</button>
            <button @click="loadKerang"
                class="relative after:contents-[''] after:h-[2px] after:w-0 after:left-0 after:bg-accent after:absolute after:bottom-[-17px] after:duration-300 focus:after:w-full hover:text-accent focus:text-accent cursor-pointer duration-150">Kerang</button>
            <button @click="loadIkan"
                class="relative after:contents-[''] after:h-[2px] after:w-0 after:left-0 after:bg-accent after:absolute after:bottom-[-17px] after:duration-300 focus:after:w-full hover:text-accent focus:text-accent cursor-pointer duration-150">Ikan</button>
        </div>
        <div class="w-full grid grid-cols-1 lg:grid-cols-2 pt-14 gap-8">
            <div v-for="food in foods" :key="food"
                class="flex justify-between font-roboto font-bold text-2xl border-b-[1px] pb-4">
                <div class="">
                    <h2 class="text-header">{{ food.name }}</h2>
                    <p class="text-base font-normal mt-1 font-inter">{{ food.desc }}</p>
                </div>
                <span class="text-accent text-end">{{ food.price }}</span>
            </div>
        </div>
        <div class="flex justify-center mt-8">
            <button @click="load" class="border-[1px] border-accent text-accent py-2 px-6 rounded-md">View menu</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            foods: [],
            lobster: [],
        }
    },
    mounted() {
        // this.load();
    },
    methods: {
        async load() {
            const response = await axios.get('http://localhost:3000/foods' + 'http://localhost:3000/lobster');
            this.foods = response.data
        },
        async loadKepiting() {
            console.log('kepiting')
            const response = await axios.get('http://localhost:3000/foods');
            this.foods = response.data
        },
        async loadLobster() {
            console.log('lobster')
            const response = await axios.get('http://localhost:3000/lobster');
            this.foods = response.data
            },
        async loadKerang() {
            console.log('kerang')
            const response = await axios.get('http://localhost:3000/kerang');
            this.foods = response.data
            },
        },

    setup() {
        return {}
    }
}
</script>

<style>

</style>