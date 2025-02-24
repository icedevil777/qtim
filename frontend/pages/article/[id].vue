<template>
    <div>
      <h1>This is Article page</h1>
      <p>{{ $route.params }}</p>
      <NuxtLink to="/">Go home page</NuxtLink>
    </div>
  </template>