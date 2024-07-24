<template>
  <div class="flex flex-col p-6 gap-3 mt-6 bg-white rounded-xl shadow-sm">
    <h1 class="text-xl font-bold">Item</h1>
    <p>Id: {{ id }}</p>
    <p>Name: {{ name }}</p>
    <p>Number: {{ number }}</p>
  </div>
</template>

<script setup>

const props = defineProps([
  'id',
  'name',
  'number'
]); 

</script>