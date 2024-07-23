<template>
  <div class="flex flex-col items-center flex-1 pt-5 px-12">
    <h1 class="text-3xl text-bold">Read</h1>
    <section 
      class="flex flex-col gap-3 mt-4 w-full sm:w-1/2"
    >
      <label for="id">Id</label>
      <input type="number" name="id" id="id" class="p-3 shadow-md rounded-sm flex" placeholder="ID of item you want to get" v-model="idField">

      <button @click="onClick" class="p-3 bg-blue-500 rounded-lg font-bold text-white mt-2">Read</button>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const axios = require('axios');

const idField = ref(null);

const onClick = async () => {

  await axios({
    method: 'post',
    url: 'http://localhost:3000/get', // TODO: Change using .env
    headers: {}, 
    // for time being
    data: {
      id: idField.value
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
