<template>
    <section class="pt-32  flex flex-col">
        <h1 class="text-5xl text-header font-bold font-roboto text-center">Menu masakan kami</h1>
        <div
            class="w-full border-b-[1px] pb-4 mt-10 gap-11 flex md:justify-center text-xl overflow-x-scroll md:overflow-hidden">
            <button v-for="button in buttons" :key="button.id" @click="menuLoad"
                :class="`menu-btn relative after:contents-[''] after:h-[2px] after:w-0 after:left-0 after:bg-accent after:absolute after:bottom-[-17px] after:duration-300 focus:after:w-full hover:text-accent focus:text-accent cursor-pointer duration-150 ${button.class}`"
                :id="`${button.for}`">{{ button.title }}</button>
        </div>
        <div id="daftar-menu" class="w-full grid grid-cols-1 lg:grid-cols-2 pt-14 gap-8">

        </div>
        <div class="flex justify-center mt-8">
            <button @click="allMenu" class="border-[1px] border-accent text-accent py-2 px-6 rounded-md">All
                menu</button>
        </div>
    </section>
</template>

<script>
// import axios from 'axios';
export default {
    setup() {
        let buttons = [
            { id: 1, title: 'Kepiting', for: 'kepiting', class: `text-accent after:w-full` },
            { id: 2, title: 'Lobster' },
            { id: 3, title: 'Kerang' },
            { id: 4, title: 'Ikan' },
            { id: 4, title: 'Mix' },
        ];

        function displayMenu(){
            $.getJSON('db.json', function (data) {
                    let foods = data.foods;
                    let content = '';
                    let kepiting = $('#kepiting').html()
                    $.each(foods, function (i, data) {
                        if (data.category == kepiting.toLowerCase()) {
                            content += `
                            <div class="flex justify-between font-roboto font-bold text-2xl border-b-[1px] pb-4">
                            <div id="">
                                <h2 class="text-header">${data.name}</h2>
                                <p class="text-base font-normal mt-1 font-inter">${data.desc}</p>
                            </div>
                            <span class="text-accent text-end">${data.price}</span>
                        </div>
                            `
                        }
                    })
                    $('#daftar-menu').html(content)
                })
        }
        displayMenu()

        function allMenu() {
            console.log('All Menu');
            $.getJSON('db.json', function (data) {
                let content = '';
                let foods = data.foods;
                $('#daftar-menu').html(content);
                $.each(foods, function (i, data) {
                    $('#daftar-menu').append(`
                    <div class="flex justify-between font-roboto font-bold text-2xl border-b-[1px] pb-4">
                        <div id="">
                            <h2 class="text-header">${data.name}</h2>
                            <p class="text-base font-normal mt-1 font-inter">${data.desc}</p>
                        </div>
                        <span class="text-accent text-end">${data.price}</span>
                    </div>
                    `)
                })
            })
            return;
        }
        

        function menuLoad() {
            $('.menu-btn').on('click', function () {
                $('.menu-btn').removeClass('text-accent after:w-full')
                let category = $(this).html();
                console.log(category);
                $.getJSON('db.json', function (data) {
                    let foods = data.foods;
                    let content = '';
                    $.each(foods, function (i, data) {
                        if (data.category == category.toLowerCase()) {
                            content += `
                            <div class="flex justify-between font-roboto font-bold text-2xl border-b-[1px] pb-4">
                            <div id="">
                                <h2 class="text-header">${data.name}</h2>
                                <p class="text-base font-normal mt-1 font-inter">${data.desc}</p>
                            </div>
                            <span class="text-accent text-end">${data.price}</span>
                        </div>
                            `
                        }
                    })
                    $('#daftar-menu').html(content)
                })
            })
        }
        menuLoad()

        return { allMenu, buttons, menuLoad, displayMenu }
    },

    data() {
        // return {
        //     foods: [],
        //     lobster: [],
        // }
    },
    // mounted() {
    //     // this.load();
    // },
    // methods: {
    //     async load() {
    //         const response = await axios.get('http://localhost:3000/foods' + 'http://localhost:3000/lobster');
    //         this.foods = response.data
    //     },
    //     async loadKepiting() {
    //         console.log('kepiting')
    //         const response = await axios.get('http://localhost:3000/foods');
    //         this.foods = response.data
    //     },
    //     async loadLobster() {
    //         console.log('lobster')
    //         const response = await axios.get('http://localhost:3000/lobster');
    //         this.foods = response.data
    //         },
    //     async loadKerang() {
    //         console.log('kerang')
    //         const response = await axios.get('http://localhost:3000/kerang');
    //         this.foods = response.data
    //         },
    //     },
}
</script>

<style>

</style>