<template>
  <section class="astro-cList_wrapper" >
    <div class="placeholder" v-for="card in cards"></div>
  </section>
</template>

<script setup lang="ts">
  const cards = [1, 2, 3, 4, 5];
</script>

<style lang="scss">
  .placeholder {
    background-color: mediumspringgreen;
    height: 170px;
    border-radius: 10px;
    margin-bottom: 10px;
  };

  .astro {
    &-cList {
      &_wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
      };
    };
  };
</style>
