<script setup>
import navbar from './components/navbar.vue'
import home from './components/home.vue'
import aboutUs from './components/about-us.vue'
import foodCategory from './components/food-category.vue'
import whyUs from './components/why-us.vue'
import foodMenu from './components/food-menu.vue'
import testimonials from './components/testimonials.vue'
import footerSec from './components/footer-section.vue'
</script>

<template>
  <div class="container m-auto px-5">
    <navbar/>
    <home/>
    <aboutUs/>
    <foodCategory/>
    <whyUs/>
    <foodMenu/>
    <testimonials/>
  </div>
  <footerSec/>
</template>

<style scoped>
</style>
