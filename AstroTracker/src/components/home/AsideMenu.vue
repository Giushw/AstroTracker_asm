<template>
  <Splitter layout="vertical" class="home-aside_wrapper">
    <SplitterPanel class="flex align-items-center justify-content-center" :size="30"> 
      <SpeedMode />
      <!-- Panel 1 -->
    </SplitterPanel>
    <SplitterPanel class="flex align-items-center justify-content-center" :size="70">
      Panel 2 
    </SplitterPanel>
  </Splitter>
</template>

<script setup lang="ts">
  import Splitter from 'primevue/splitter';
  import SplitterPanel from 'primevue/splitterpanel';
  import SpeedMode from './asideMenu/SpeedMode.vue'
</script>

<style lang="scss">
  .home {
    &-aside {
      &_wrapper {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>