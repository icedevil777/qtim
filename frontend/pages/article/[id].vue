<template>
  <p v-if="error">
    {{ error }}
  </p>
  <p v-if="status === 'pending'">Fetching data ...</p>
  <div v-else class="flex flex-col max-w-[900px] justify-center px-10 mx-auto space-y-5 mb-30">
    <div class="text-end text-lg">
      <NuxtLink class="underline" to="/">Go home page</NuxtLink>
    </div>
    <h1 class="text-6xl capitalize mt-10">{{ post.preview }}</h1>
    <img class="w-full" src="~/assets/img/post-img.png" />
    <p class="text-4xl">{{ post.description }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: post, status, error, refresh } = await useFetch(() => `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${route.params.id}`);
</script>
