<template>
  <div>
    <nav>
      <router-link :to="{ name: 'read' }">Read</router-link> |
      <router-link :to="{ name: 'create' }">Create</router-link> |
      <router-link :to="{ name: 'update' }">Update</router-link> | 
      <router-link :to="{ name: 'delete' }">Delete</router-link> |
    </nav>
    <router-view/>
  </div>
</template>

<style>

</style>
