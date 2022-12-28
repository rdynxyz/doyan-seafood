<template>
  <nav class="container h-28 flex items-center z-30">
    <div class="flex items-center">
      <img :src="`./images/logo.webp`" alt="" class="w-14">
      <h1 class="text-accent text-2xl font-roboto font-bold ml-2">Doyan Seafood</h1>
    </div>
    <div class="ml-20 hidden lg:block z-30">
      <ul class="flex gap-8">
        <li v-for="nav in navList" :key="nav">
          <a :class="`${nav.class}`" class="relative after:contents-[''] after:h-[2px] after:w-0 after:left-0 after:bg-accent after:absolute after:bottom-[-6px] after:duration-300 focus:after:w-6 hover:after:w-6 cursor-pointer focus:font-bold focus:text-accent duration-150" :href="`${nav.ref}`">{{nav.name}}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  setup(){
    let navList = [
      {name : 'Home', ref: '#', class:'after:w-6 font-bold text-accent'},
      {name : 'About Us', ref: '#about-us'},
      {name : 'Contact', ref: '#footer'},
      {name : 'Outlet', ref: '#'},
    ];
    return {navList};
  }
}
</script>

<style>

</style>