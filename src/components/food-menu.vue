<template>
    <section class="pt-32 pb-10">
        <h1 class="text-5xl text-header font-bold font-roboto text-center">Our Food Menu</h1>
        <p class="text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Varius sed pharetra dictum neque massa congue</p>
        <div class="w-full border-b-[1px] pb-4 mt-10 gap-11 flex md:justify-center text-xl overflow-x-scroll md:overflow-hidden">
            <button href="#" class="relative after:contents-[''] after:h-[2px] after:w-0 after:left-0 after:bg-accent after:absolute after:bottom-[-17px] after:duration-300 focus:after:w-full hover:text-accent focus:text-accent cursor-pointer duration-150">Breakfast</button>
            <button href="#" class="relative after:contents-[''] after:h-[2px] after:w-0 after:left-0 after:bg-accent after:absolute after:bottom-[-17px] after:duration-300 focus:after:w-full hover:text-accent focus:text-accent cursor-pointer duration-150">Lunch</button>
            <button href="#" class="relative after:contents-[''] after:h-[2px] after:w-0 after:left-0 after:bg-accent after:absolute after:bottom-[-17px] after:duration-300 focus:after:w-full hover:text-accent focus:text-accent cursor-pointer duration-150">Dinner</button>
            <button href="#" class="relative after:contents-[''] after:h-[2px] after:w-0 after:left-0 after:bg-accent after:absolute after:bottom-[-17px] after:duration-300 focus:after:w-full hover:text-accent focus:text-accent cursor-pointer duration-150">Dessert</button>
        </div>
        <div class="w-full grid grid-cols-1 lg:grid-cols-2 pt-14 gap-8">
            <div v-for="menu in menus" :key="menu" class="flex justify-between font-roboto font-bold text-2xl border-b-[1px] pb-4">
                <div class="">
                    <h2 class="text-header">{{ menu.name }}</h2>
                    <p class="text-base font-normal mt-1 font-inter">{{ menu.desc }}</p>
                </div>
                <span class="text-accent">{{ menu.price }}</span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    setup(){
        let menus = [
            {
            name: 'Alder Grilled Chinook Salmon',
            desc: 'Toasted French bread topped with romano, cheddar',
            price: 'IDR 35K' },
            {
            name: 'King Crab',
            desc: 'A 5 medium crab with black papper sauce',
            price: 'IDR 35K' },
            {
            name: 'Lobster Party',
            desc: 'Big sized lobster with padang sauce',
            price: 'IDR 35K' },
            {
            name: 'Mixed Seafood',
            desc: 'Lobster, Crab, and Shell all in one',
            price: 'IDR 35K' },
        ]

        return{menus}
    }
}
</script>

<style>

</style>