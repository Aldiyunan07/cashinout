<template>
  <Navbar/>
  <div class="mt-8">
    <router-view/>
  </div>
</template>
<script>
  import Navbar from '@/components/NavbarView.vue'
  export default{
    components:{
      Navbar
    },
  }
</script>
<style>
</style>
