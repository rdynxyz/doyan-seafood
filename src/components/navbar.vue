<template>
  <nav class="container h-28 flex items-center z-30">
    <div class="">
      <h1 class="text-accent text-2xl font-roboto font-bold">Doyan Seafood</h1>
    </div>
    <div class="ml-20 hidden lg:block z-30">
      <ul class="flex gap-8">
        <li v-for="nav in navList" :key="nav"><a class="relative after:contents-[''] after:h-[2px] after:w-0 after:left-0 after:bg-accent after:absolute after:bottom-[-6px] after:duration-300 focus:after:w-6 hover:after:w-6 cursor-pointer focus:font-bold duration-150" :href="`${nav.ref}`">{{nav.name}}</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  setup(){
    let navList = [
      {name : 'Home', ref: '#'},
      {name : 'About Us', ref: '#'},
      {name : 'Contact', ref: '#'},
      {name : 'Contact', ref: '#'},
    ];
    return {navList};
  }
}
</script>

<style>

</style>