<template>
  <div class="sm:px-5">
    <h1 class="px-5 text-5xl font-normal">Articles</h1>
    <div class="flex flex-wrap mt-5">
      <div class="card w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-3" v-for="post in pugData" :key="post">
        <img class="w-full rounded-lg" src="~/assets/img/post-img.png" />
        <p class="mt-2 text-center text-lg md:text-xl">{{ post.title }}</p>
      </div>
    </div>
    <!-- <NuxtLink to="/article/1">Article page</NuxtLink> -->
  </div>
</template>

<script lang="ts" setup>
import { getPosts } from '~/common/loadData';
import { ref, onMounted } from 'vue';

const { posts, loading, error, fetchPosts } = getPosts();
const pugData = ref<Array<any>>([]);

function setPugData(from: number): void {
  pugData.value = posts.value.slice(from, from + 8);
}

onMounted(async () => {
  await fetchPosts();
  setPugData(0);
  console.log('pugData', pugData);
});
</script>

<style scoped>
.card {
  width: calc();
}
</style>
