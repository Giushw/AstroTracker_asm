
<template>
  <div  class="astro-graph_wrapper">
    <Panel class="astro-graph_graph">
      <template #header>
        <div class="astro-graph_titleGroup">
          <h4 class="astro-graph_title">Time since it passed by</h4>
        </div>
      </template>

      <div ref="chartWrapper" class="astro-graph_wrapper" v-if="graphedAstros">
        <Chart id="canvas" type="scatter" :data="graphedAstros" :options="options"/>
      </div>
    </Panel>
  </div>
</template>

<script setup lang="ts">
  import {type ComputedRef, computed} from 'vue';
  import Panel from 'primevue/panel';
  import Chart from 'primevue/chart';
  import {useAstroData} from '../../../stores/astroData';
  import {SlimNeoEntity} from '../../common/AstroCard.vue';
  import {parseAstros, hoursSince} from '../../../lib/utils';

  const astroStore = useAstroData();

  const parsedAstros: ComputedRef<SlimNeoEntity[] | null> = computed(() => {
    return astroStore.getDataAstros ? parseAstros(astroStore.getDataAstros) : null;
  });

  interface ChartEntity {
    x: number,
    y: number,
    vel: number,
    outSize: number,
    inSize: number,
    type:'safe' | 'danger'
  };

  interface ChartSet {
    label: string,
    data: ChartEntity[]
  };

  interface ChartData {
    datasets: ChartSet[]
  };

  const toGraph = (collector: SlimNeoEntity[]) : ChartData => {
    const chartEntities: ChartEntity[] = collector.map(col => ({
      x: hoursSince(col.closeApproac.date.full),
      y: Math.ceil(parseFloat(col.closeApproac.distance)),
      vel: Math.ceil(parseFloat(col.closeApproac.velocity)),
      outSize: Math.ceil(col.diameter.max),
      inSize: Math.ceil(col.diameter.min),
      type: col.dangerous ? 'danger' : 'safe'
    }));

    const chartData: ChartData = {
      datasets: [
        {
          label: 'Yesterday',
          data: chartEntities
        }
      ]
    }

    return chartData;
  };

  const graphedAstros: ComputedRef<ChartData | null> = computed(() => {
    return parsedAstros.value ? toGraph(parsedAstros.value) : null;
  });

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        type: 'linear',
        position: 'top',
        min: 0,
        reverse: true,
        border: {
          color: '#FFFFFF'
        },
        grid: {
          color: '#666666'
        },
        ticks: {
          color: '#FFFFFF',
          font: {
            size: 14,
            family: 'Inter'
          },
          callback: function(value: number) {
            return value > 0 ? value + 'h' : 'Now' ;
          }
        }
      },
      y: {
        type: 'linear',
        min: 0,
        border: {
          color: '#FFFFFF'
        },
        grid: {
          color: '#666666'
        },
        ticks: {
          maxTicksLimit: 5,
          color: '#FFFFFF',
          font: {
            size: 14,
            family: 'Inter'
          },
          callback: function(value: number) {
            return value + ' km';
          }
        },
        title: {
          display: true,
          align: 'start',
          text: 'Distance',
          color: '#FFFFFF',
          font: {
            family: 'MuseoModerno',
            size: 14,
            weight: 'normal'
          }
        }
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    animation: {
      easing: 'easeOutQuad',
    },
    elements: {
      point: {
        radius: (context: any) => {
          const pointData = context.dataset.data[context.dataIndex];
          if (pointData?.inSize <= 100) {
            return 25;
          } else if (pointData?.inSize > 100 && pointData?.inSize <= 1000) {
            return 35;
          } else {
            return 50;
          }
        },
        hoverRadius: (context: any) => {
          const pointData = context.dataset.data[context.dataIndex];
          if (pointData?.outSize <= 100) {
            return 50;
          } else if (pointData?.outSize > 100 && pointData?.outSize <= 1000) {
            return 70;
          } else {
            return 100;
          }
        },
        backgroundColor: (context: any) => {
          const pointData = context.dataset.data[context.dataIndex];
          if (pointData?.type === 'safe') {
            return '#3967DE';
          } else if (pointData?.type === 'danger') {
            return '#911A1A';
          } else {
            return 'mediumspringgreen';
          }
        }
      },
    },
  };

</script>

<style lang="scss">
  .astro {
    &-graph {
      &_wrapper {
        position: relative;
        width: 100%;
        height: 100%;

        canvas {
          width: 100%;
          height: 100%;
        }
      };

      &_titleGroup {
        width: 100%;
        display: flex;
        justify-content: flex-end;
      }
    };
  };
</style>
