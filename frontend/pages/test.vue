<template>
  <h1>test page</h1>
  {{ data }}
</template>

<script setup lang="ts">
const id = ref(1);
const { data, pending, error } = await useFetch(() => `https://dummyjson.com/products/${id.value}`);
</script>
