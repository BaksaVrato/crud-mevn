<template>
  <div class="flex flex-col items-center flex-1 pt-5 px-12">
    <h1 class="text-3xl text-bold">Create</h1>
    <form 
      class="flex flex-col gap-3 mt-4 w-full sm:w-1/2"
      >
      <label for="id">Id</label>
      <input type="number" name="id" id="id" class="p-3 shadow-md rounded-sm flex" placeholder="ID (must be unique)">

      <label for="name">Name</label>
      <input type="text" name="name" id="name" class="p-3 shadow-md rounded-sm" placeholder="Name">

      <label for="number">Number</label>
      <input type="number" name="number" id="number" class="p-3 shadow-md rounded-sm" placeholder="Number">

      <button type="submit" class="p-3 bg-green-600 rounded-lg font-bold text-white mt-2">Create</button>
    </form>
  </div>
</template>

<script>

</script>
