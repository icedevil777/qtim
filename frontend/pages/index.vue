<template>
  <div>
    <h1>This is Home page</h1>
    <p>{{ $route.params.slug }}</p>

    <NuxtLink to="/article/1">Article page</NuxtLink>
  </div>
</template>
