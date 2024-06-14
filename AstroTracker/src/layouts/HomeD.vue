<template>
  <Splitter class="home-desktop_wrapper" :gutterSize="40">
    <SplitterPanel :size="70" :minSize="70">
      <MainView />
    </SplitterPanel>

    <SplitterPanel :size="30"  :minSize="30">
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
    &-desktop {
      &_wrapper {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 2;
        background-color: transparent;
      };
    };
  };
</style>