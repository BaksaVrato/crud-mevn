<template>
  <div class="flex flex-col min-h-screen">
    <Navbar/>
    <section class="flex flex-1 mt-12">
      <router-view/>
    </section>
  </div>
</template>

<script setup>

import Navbar from './components/Navbar.vue'


</script>
