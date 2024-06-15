<template>
  <section class="astro-cList_wrapper" >
    <div class="astro-cList_item" v-for="card in cards" :key="card">
      <AstroCard :o-size="130" :i-size="50" :data="astroData"/>
    </div>
  </section>
</template>

<script setup lang="ts">
  import AstroCard from '../../common/AstroCard.vue';

  const cards = [1, 2, 3, 4, 5];
  const astroData = {
    name: '2023BH1',
    contactTime: '25 JAN 2023',
    dist: '1,377,769'
  };
</script>

<style lang="scss">
  .astro {
    &-cList {
      &_wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
      };

      &_item {
        margin-bottom: 10px;
      };
    };
  };
</style>
