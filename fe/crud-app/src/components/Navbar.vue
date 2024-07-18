<template>
  <div class="fixed z-10 w-full shadow-md p-3 bg-white">
    <nav class="flex gap-4 flex-row">

      <router-link 
        :to="{ name: 'read' }"
        class="hover:text-gray-500"
      > Read </router-link>

      <router-link 
        :to="{ name: 'create' }"
        class="hover:text-gray-500"
      > Create </router-link>

      <router-link 
        :to="{ name: 'update' }"
        class="hover:text-gray-500"
      > Update </router-link> 

      <router-link 
        :to="{ name: 'delete' }"
        class="hover:text-gray-500"
      > Delete </router-link>

    </nav>
  </div>
</template>

<script>

</script>

