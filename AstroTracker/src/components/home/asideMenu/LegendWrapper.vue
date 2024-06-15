<template>
  <Card class="legend-info">
    <template #title>
      <h2 class="legend-info_title">Legend</h2>
    </template>
    <template #content>
      <LegendInfo />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import Card from 'primevue/card';
  import LegendInfo from '../../common/LegendInfo.vue';

</script>

<style lang="scss">
  .legend {
    &-info {
      width: 100%; 
      padding: 10px 15px;
      border-radius: 115px;
      background-color: var(--trasparent-grey);
    };
  };
</style>