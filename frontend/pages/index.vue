<template>
  <div class="sm:px-5 w-full">
    <h1 class="px-5 text-5xl font-normal">Articles</h1>
    <div v-if="posts" class="flex flex-wrap mt-5">
      <div class="card w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-3" v-for="post in pagData" :key="post">
        <NuxtLink :to="`/article/${post.id}`">
          <img class="w-full rounded-lg" src="~/assets/img/post-img.png" />
          <p class="mt-2 text-center text-lg md:text-xl">{{ post.id - 1 }} {{ post.title }}</p>
        </NuxtLink>
      </div>
    </div>
    <div v-else-if="status === 'pending'" class="flex text-3xl w-[1400px] h-96 justify-center">
      <span class="m-auto">Loading ...</span>
    </div>
    <div class="flex mt-5 md:pl-3 w-full">
      <div class="flex mx-auto space-x-2">
        <div @click="setpagData(currentPage > 0 ? currentPage - 1 : currentPage)" class="flex w-12 h-12 rounded-xl cursor-pointer pug-border">
          <span class="m-auto text-xl"><</span>
        </div>
        <div
          v-for="i in pagArray"
          :key="i"
          class="w-12 h-12 rounded-xl cursor-pointer"
          :class="[
            i === currentPage + 1 ? 'bg-[black] text-white' : 'bg-[#F3F3F3] text-black',
            i > currentPage - 1 && ((i < currentPage + 4 && currentPage === 0) || (i < currentPage + 3 && currentPage != 0) || currentPage === pagArray) ? 'flex' : 'hidden',
          ]"
          @click="setpagData(i - 1)"
        >
          <span class="m-auto text-lg">{{ i }}</span>
        </div>
        <div @click="setpagData(currentPage < pagArray - 1 ? currentPage + 1 : currentPage)" class="flex w-12 h-12 rounded-xl cursor-pointer pug-border">
          <span class="m-auto text-xl">></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const pagData = ref<Array<Object>>([]);
const pagConst = <number>8;
const currentPage = ref<number>(0);
const { data: posts, status, error, refresh } = await useFetch(() => `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts`);
setpagData(0);

function setpagData(page: number): void {
  pagData.value = posts.value.slice(page * pagConst, page * pagConst + pagConst);
  currentPage.value = page;
}

const pagArray: number = computed((): number => {
  return Math.ceil(posts.value.length / pagConst);
});
</script>

<style scoped>
.pug-border {
  border: solid black 1px;
}

.card:hover {
  transform: scale(1.05);
}
</style>
