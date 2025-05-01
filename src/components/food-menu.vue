<template>
    <section class="pt-32 flex flex-col">
      <h1 class="text-5xl text-header font-bold font-roboto text-center">Menu masakan kami</h1>
  
      <div class="w-full border-b pb-4 mt-10 gap-11 flex md:justify-center text-xl overflow-x-scroll md:overflow-hidden">
        <!-- NOTEs: Gunakan v-for dan ubah kategori saat tombol diklik -->
        <button
          v-for="button in buttons"
          :key="button.id"
          @click="filterMenu(button.title)"
          :class="[
            'menu-btn relative after:contents-[\'\'] after:h-[2px] after:left-0 after:bg-accent after:absolute after:bottom-[-16px] after:duration-300 hover:text-accent cursor-pointer duration-150',
            activeCategory === button.title ? 'text-accent after:w-full' : 'after:w-0'
          ]"
        >
          {{ button.title }}
        </button>
      </div>
  
      <div class="w-full grid grid-cols-1 lg:grid-cols-2 pt-14 gap-8">
        <!-- NOTEs: Tampilkan hasil filter berdasarkan kategori -->
        <div
          v-for="item in filteredMenu"
          :key="item.name"
          class="flex justify-between font-roboto font-bold text-2xl border-b pb-4"
        >
          <div>
            <h2 class="text-header">{{ item.name }}</h2>
            <p class="text-base font-normal mt-1 font-inter">{{ item.desc }}</p>
          </div>
          <span class="text-accent text-end">{{ item.price }}</span>
        </div>
      </div>
  
      <div class="flex justify-center mt-8">
        <!-- NOTEs: Reset filter jika "All menu" ditekan -->
        <button
          @click="showAllMenu"
          class="border border-accent text-accent py-2 px-6 rounded-md hover:bg-accent hover:text-white duration-150"
        >
          All menu
        </button>
      </div>
    </section>
  </template>
  
  <script>
  // NOTEs: Ganti jQuery dengan fetch dan reactive refs
  import { ref, onMounted, computed } from 'vue'
  
  export default {
    setup() {
      const allFoods = ref([]) // NOTEs: Data semua makanan
      const activeCategory = ref('Kepiting') // NOTEs: Kategori aktif default
  
      const buttons = [ // NOTEs: Data tombol kategori
        { id: 1, title: 'Kepiting' },
        { id: 2, title: 'Lobster' },
        { id: 3, title: 'Kerang' },
        { id: 4, title: 'Ikan' },
        { id: 5, title: 'Mix' },
        { id: 6, title: 'Dish' }
      ]
  
      // NOTEs: Ambil data JSON saat komponen dimount
      const fetchFoods = async () => {
        const res = await fetch('/db.json') // NOTEs: Pastikan file ini ada di public/
        const data = await res.json()
        allFoods.value = data.foods
      }
  
      onMounted(() => {
        fetchFoods()
      })
  
      // NOTEs: Computed property untuk filter makanan sesuai kategori
      const filteredMenu = computed(() => {
        if (!activeCategory.value) return allFoods.value
        return allFoods.value.filter(food => food.category.toLowerCase() === activeCategory.value.toLowerCase())
      })
  
      // NOTEs: Fungsi untuk ubah kategori
      const filterMenu = (category) => {
        activeCategory.value = category
      }
  
      // NOTEs: Fungsi untuk menampilkan semua menu (tanpa filter)
      const showAllMenu = () => {
        activeCategory.value = ''
      }
  
      return {
        buttons,
        activeCategory,
        filteredMenu,
        filterMenu,
        showAllMenu
      }
    }
  }
  </script>
  
  <style scoped>
  /* NOTEs: Kamu bisa tambahkan style di sini kalau butuh */
  </style>
  