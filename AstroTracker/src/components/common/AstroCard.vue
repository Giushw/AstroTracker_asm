<template>
  <Card style="width: 25rem; overflow: hidden" class="astro-card_wrapper" >
    <template #header>
      <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png" />
    </template>
    <template #content>
      <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
          quas!
      </p>
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
      };
    };
  };
</style>
