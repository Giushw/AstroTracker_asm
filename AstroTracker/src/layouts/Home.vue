<template>
  <Splitter class="home-splitter_wrapper">
    <SplitterPanel class="flex align-items-center justify-content-center" :size="70">
      <MainView />
    </SplitterPanel>

    <SplitterPanel class="flex align-items-center justify-content-center" :size="30"  :minSize="10">
      <AsideMenu />
    </SplitterPanel>
  </Splitter>
</template>

<script setup lang="ts">
  import Splitter from 'primevue/splitter';
  import SplitterPanel from 'primevue/splitterpanel';
  import MainView from '../components/home/MainView.vue';
  import AsideMenu from '../components/home/AsideMenu.vue';

</script>

<style lang="scss">
  .home {
    &-splitter {
      &_wrapper {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 2;
      }
    }
  }
</style>