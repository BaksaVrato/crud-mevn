<template>
  <div class="flex flex-col items-center flex-1 pt-5 px-12">
    <h1 class="text-3xl text-bold">Delete</h1>
    <form 
      class="flex flex-col gap-3 mt-4 w-full sm:w-1/2"
      >
      <label for="id">Id</label>
      <input type="number" name="id" id="id" class="p-3 shadow-md rounded-sm flex" placeholder="ID of item you want to delete">

      <button type="submit" class="p-3 bg-red-500 rounded-lg font-bold text-white mt-2">Delete</button>
    </form>
  </div>
</template>

<script>

</script>
