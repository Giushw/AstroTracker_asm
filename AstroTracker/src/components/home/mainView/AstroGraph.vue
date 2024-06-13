
<template>
  <div class="astro-graph_wrapper">
    <Panel class="astro-graph_graph">
      <template #header>
        <div class="astro-graph_titleGroup">
          <h4 class="astro-graph_title">Time since it passed by</h4>
        </div>
      </template>
      <div class="">
        <Chart type="scatter" :data="scatterData"></Chart>
      </div>
    </Panel>
  </div>
</template>

<script setup lang="ts">
  import {ref, type Ref} from 'vue';
  import Panel from 'primevue/panel';
  import Chart from 'primevue/chart';

  const scatterData: Ref<any> = ref({
    datasets: [
      {
        label: 'Scatter Dataset',
        data: [
          { x: -10, y: 0 },
          { x: 0, y: 10 },
          { x: 10, y: 5 },
          { x: 0.5, y: 5.5 },
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });
</script>

<style lang="scss">
  .astro {
    &-graph {
      &_wrapper {
        width: 100%;
        height: 100%;
      };

      &_titleGroup {
        width: 100%;
        display: flex;
        justify-content: flex-end;
      }
    };
  };
</style>