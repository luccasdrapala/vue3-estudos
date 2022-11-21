<template>
  <TheHeader/>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

    export default {
      name: 'AboutView',
      components: {
        TheHeader
      }
    }  

</script>
