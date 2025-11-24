<template>
  <div id="app">

    <nav class="navbar">
      <RouterLink to="/">Головна</RouterLink>
      <RouterLink to="/random">Випадкова цитата</RouterLink>
    </nav>

    <router-view />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.navbar {
  display: flex;
  gap: 20px;
  padding: 15px;
  background: #efefef;
  border-bottom: 1px solid #ccc;
}

.navbar a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.navbar a.router-link-active {
  color: #007bff;
}
</style>

