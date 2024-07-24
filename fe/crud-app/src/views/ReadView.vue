<template>
  <div class="flex flex-col items-center flex-1 pt-5 px-12">
    <h1 class="text-3xl text-bold">Read</h1>
    <section 
      class="flex flex-col gap-3 mt-4 w-full sm:w-1/2"
    >
      <label for="id">Id</label>
      <input type="number" name="id" id="id" class="p-3 shadow-md rounded-sm flex" placeholder="ID of item you want to get" v-model="idField" @focusin="hideItem()">

      <button @click="onClick" class="p-3 bg-blue-500 rounded-lg font-bold text-white mt-2">Read</button>
    </section>

    <Item v-show="isItemShowing" :id="idField" :name="nameField" :number="numberField"/>

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

const hideItem = () => {
  if(isItemShowing.value) isItemShowing.value = false;
  idField.value = null;
};

const onClick = async () => {

  await axios({
    method: 'post',
    url: 'http://localhost:3000/get', // TODO: Change using .env
    headers: {}, 
    data: {
      id: idField.value
    }
  })
  .then((response) => {

    const data = response.data.split(' ');
    
    idField.value = data[0];
    console.log(idField.value);

    numberField.value = data.pop();
    console.log(numberField.value);

    data.splice(0,1);
    nameField.value = data.join('');

    isItemShowing.value = true;
  })
  .catch((error) => {
    console.log(error.response.status);
    const status = (error.response.status).toString();
    router.push({ 
      name: status
    });
  });
};



</script>
