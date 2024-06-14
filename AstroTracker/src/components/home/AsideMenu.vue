<template>
  <Splitter layout="vertical" class="home-aside_wrapper" :gutter-size="10">
    <SplitterPanel :size="30" :min-size="30"> 
      <SpeedMode  @switch-speed-mode="(e) => console.log('speed mode is active? ', e.value)"/>
    </SplitterPanel>
    <SplitterPanel :size="80"  :min-size="80">
      <LegendInfo />
    </SplitterPanel>
  </Splitter>
</template>

<script setup lang="ts">
  import Splitter from 'primevue/splitter';
  import SplitterPanel from 'primevue/splitterpanel';
  import SpeedMode from './asideMenu/SpeedMode.vue';
  import LegendInfo from '../common/LegendInfo.vue';
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