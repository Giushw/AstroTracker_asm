<template>
  <Splitter class="home-splitter_wrapper">
    <SplitterPanel class="flex align-items-center justify-content-center" :size="75">
      Panel 1 
    </SplitterPanel>

    <SplitterPanel class="flex align-items-center justify-content-center" :size="25"  :minSize="10">
      Panel 2
    </SplitterPanel>
  </Splitter>
</template>

<script setup lang="ts">
  import Splitter from 'primevue/splitter';
  import SplitterPanel from 'primevue/splitterpanel';

</script>

<style lang="scss">
  .home {
    &-splitter {
      &_wrapper {
        height: 100%;
        width: 100%;
      }
    }
  }
</style>