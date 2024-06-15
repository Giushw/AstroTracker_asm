<template>
  <main class="main-wrapper">
    <Intestation :is-mobile="false"/>

    <AstroGraph />
  </main>
</template>

<script setup lang="ts">
  import Intestation from './mainView/Intestation.vue';
  import AstroGraph from './mainView/AstroGraph.vue';
</script>

<style lang="scss">
  .main {
    &-wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
    };
  };
</style>