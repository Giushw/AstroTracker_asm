<template>
  <footer class="footer_wrapper">
    <Image class="footer_logo" src="./assets/logo_placeholder.svg" alt="The Visual Agency Logo" width="270" height="25"/>
  </footer>
</template>

<script setup lang="ts">
  import Image from 'primevue/image';
</script>

<style lang="scss">
  .footer {
    &_wrapper {
      width: 100vw;
      padding: 73px 52px 15px;
      background-color: var(--color-white);
      position: relative;
      z-index: 3;

      @include desktop {
        padding: 13px 0;
        border-radius: 25% 25% 0 0;
        position: absolute;
        bottom: 0;
        left: 0;
      };
    };

    &_logo {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: flex-end;

      @include desktop {
        align-items: center;
      };
    }
  };
</style>
