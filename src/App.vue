<template>
  <header>
    
    <div class="container header">
      <Logo />
      <Navbar />
    </div>

  </header>

  <main>
    
  </main>
</template>

<script setup>
  // Configs
  import themeConfig from './themeConfig'

  // Components
  import Logo from './components/header/logo.vue'
  import Navbar from './components/header/navbar.vue';

</script>

<style scoped>

  header {
    background: v-bind('themeConfig.colorTheme')
  }

  .header {}

</style>
