<template>
  <div class="flex flex-col max-w-[900px] justify-center px-10 mx-auto space-y-5 mb-30">
    <div class="text-end text-lg">
      <NuxtLink class="underline" to="/">Go home page</NuxtLink>
    </div>
    <h1 class="text-6xl capitalize mt-10">{{ posts.preview }}</h1>
    <img class="w-full" src="~/assets/img/post-img.png" />
    <p class="text-4xl">{{ posts.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { getPosts } from '~/common/loadData';

const { posts, loading, error, fetchPosts } = getPosts();
const route = useRoute();

onMounted(async () => {
  await fetchPosts(route.params.id);
});
</script>
