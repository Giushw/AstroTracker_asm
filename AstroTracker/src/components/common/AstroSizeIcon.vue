<template>
  <div class="astro-size">
    <div class="astro-size_outer">
      <div class="astro-size_middle">
        <div class="astro-size_inner"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
  .astro {
    &-size {
      &_outer, &_middle, &_inner {
        border-radius: 50%;
        border: 1px solid  var(--color-white);
      };

      &_outer, &_middle {
        display: flex;
        justify-content: center;
        align-items: flex-end;
      };

      &_outer {
        width: 59px;
        height: 59px;
      };

      &_middle {
        width: 43px;
        height: 43px;
      };

      &_inner {
        width: 25px;
        height: 25px
      };
    };
  };
</style>
