<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo"
         src="https://store-images.s-microsoft.com/image/apps.8767.14614728364888398.674c4c2d-acfd-4c6f-a4fa-3b64f19a4a54.6285f01f-be0b-431f-adcc-ad4c15340176"
         width="480" height="480" />
    <div class="wrapper">
      <h1 class="text-center font-500 text-xl"> ACC Server Config</h1>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}


</style>
