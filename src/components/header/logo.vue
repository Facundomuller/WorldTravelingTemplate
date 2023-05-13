<template>
  <div>
    <h1>Word Travelers</h1>
  </div>
</template>

<script setup>
  import themeConfig from '../../themeConfig';
  
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Signika:wght@600&display=swap');

  h1 {
    color: v-bind('themeConfig.colorWhite');
    font-family: 'Signika', sans-serif;
    letter-spacing: 1px;
  }

</style>