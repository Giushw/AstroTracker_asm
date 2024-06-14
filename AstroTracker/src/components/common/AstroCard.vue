<template>
  <Card class="astro-card_wrapper" >
    <template #content>
      <div class="astro-card_image">

      </div>
      <div class="astro-card_info">

      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
  .astro {
    &-card {
      &_wrapper {
        display: flex;
        height: 170px;
        max-width: 320px;
        padding: 20px 15px;
        border-radius: 10px;
        background-color: var(--color-grey-900);
      };

      &_image {
        width: 50%;
      };

      &_info {
        width: 50%;
      };
    };
  };
</style>
