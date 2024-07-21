<template>
  <div class="flex flex-col items-center flex-1 pt-5 px-12">
    <h1 class="text-3xl text-bold">Read</h1>
    <form 
      class="flex flex-col gap-3 mt-4 w-full sm:w-1/2"
      >
      <label for="id">Id</label>
      <input type="number" name="id" id="id" class="p-3 shadow-md rounded-sm flex" placeholder="ID of item you want to get">

      <button @click="onClick" type="submit" class="p-3 bg-blue-500 rounded-lg font-bold text-white mt-2">Read</button>
    </form>
  </div>
</template>

<script setup>

const axios = require('axios');

const onClick = async () => {

  await axios({
    method: 'post',
    url: 'http://localhost:3000/get', // TODO: Change using .env
    headers: {}, 
    // for time being
    data: {
      id: 2 // This is the body part
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

};

</script>
