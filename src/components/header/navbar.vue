<template>
  <div class="nav">

    {{ 
      CategoriesMenu.map(() => {
       
      })
    }}

  </div>
</template>

<script setup>
  import CategoriesMenu from '../../hooks/CategoriesMenu'

  console.log(CategoriesMenu)
</script>

<style scoped>

</style>