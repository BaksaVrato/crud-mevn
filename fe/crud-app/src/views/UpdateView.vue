<template>
  <div class="flex flex-col items-center flex-1 pt-5 px-12">
    <h1 class="text-3xl text-bold">Update</h1>
    <section 
      class="flex flex-col gap-3 mt-4 w-full sm:w-1/2"
    >
      <label for="id">Id</label>
      <input type="number" name="id" id="id" class="p-3 shadow-md rounded-sm flex" placeholder="Id of item you want to update" v-model="idField">

      <label for="name">Name</label>
      <input type="text" name="name" id="name" class="p-3 shadow-md rounded-sm" placeholder="New name" v-model="nameField" >

      <label for="number">Number</label>
      <input type="number" name="number" id="number" class="p-3 shadow-md rounded-sm" placeholder="New number" v-model="numberField">

      <button @click="onClick" class="p-3 bg-amber-600 rounded-lg font-bold text-white mt-2">Update</button>

      <Item v-if="isItemShowing" :id="itemID" :name="itemName" :number="itemNumber" />
      
    </section>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import router from '@/router';

import Item from '@/components/Item.vue';

const axios = require('axios');

const idField = ref(null);
const nameField = ref(null);
const numberField = ref(null);

const isItemShowing = ref(false);

const itemID = ref(null);
const itemName = ref(null);
const itemNumber = ref(null);


const onClick = async () => {

  await axios({
    method: 'patch',
    url: 'http://localhost:3000/update', // TODO: Change using .env
    headers: {}, 
    data: {
      id: idField.value, 
      name: nameField.value,
      number: numberField.value
    }
  })
  .then((response) => {
    console.log(response.status);
    itemID.value = idField.value;
    itemName.value = nameField.value;
    itemNumber.value = numberField.value;
    isItemShowing.value = true;
  })
  .catch((error) => {
    console.log(error.response.status);
    const status = (error.response.status).toString();
    router.push({ name: status });
  });
};

</script>

