<template>
  <div class="flex flex-col items-center flex-1 pt-5 px-12">
    <h1 class="text-3xl text-bold">Delete</h1>
    <section 
      class="flex flex-col gap-3 mt-4 w-full sm:w-1/2"
    >
      <label for="id">Id</label>
      <input type="number" name="id" id="id" class="p-3 shadow-md rounded-sm flex" placeholder="ID of item you want to delete" v-model="idField">

      <button @click="onClick" class="p-3 bg-red-500 rounded-lg font-bold text-white mt-2">Delete</button>

      <!-- todo: do using Suspense -->
      <Item v-if="isItemShowing" :id="itemID" :name="itemName" :number="itemNumber" />
      <ItemLoading v-if="isLoading" />

    </section>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import router from '@/router';

import Item from '@/components/Item.vue';
import ItemLoading from '@/components/ItemLoading.vue';

const axios = require('axios');

const idField = ref(null);

const isItemShowing = ref(false);
const isLoading = ref(false);

const itemID = ref(null);
const itemName = ref(null);
const itemNumber = ref(null);

const onClick = async () => {

  isLoading.value = true;

  await axios({
    method: 'delete',
    url: 'http://localhost:3000/delete', // TODO: Change using .env
    headers: {}, 
    data: {
      id: idField.value
    }
  })
  .then((response) => {
    console.log(response.status);

    itemID.value = response.data.id;
    itemName.value = response.data.name;
    itemNumber.value = response.data.number;

    isItemShowing.value = true;
    isLoading.value = false;
  })
  .catch((error) => {
    console.log(error.response.status);
    const status = (error.response.status).toString();
    router.push({ name: status });
  });
  isLoading.value = false;
  isItemShowing.value = false;
};

</script>
