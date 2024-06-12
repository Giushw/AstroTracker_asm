<template>
  <div class="main-wrapper">
    <Chart type="scatter" :data="scatterData"></Chart>
  </div>
</template>

<script setup lang="ts">
  import {ref, type Ref, onMounted} from 'vue';
  import Chart from 'primevue/chart';
  import {getFeed, getLookup, getBrowse} from '../../server/NeoWs';

  
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

  const feedData: Ref<unknown> = ref(null);
  const lookupData:Ref<unknown> = ref(null);
  const browseData: Ref<unknown> = ref(null);
  const loading = ref(true);
  
  const fetchData = async () => {
    try {
      const dataF = await getFeed('2023-06-01', '2023-06-07');
      const dataL = await getLookup('3542519');
      const dataB = await getBrowse();

      feedData.value = dataF;
      lookupData.value = dataL;
      browseData.value = dataB;

      console.log('Fetched data feed: ', dataF); // Log the fetched data
      console.log('feedData.value: ', feedData.value); // Log the ref value
      
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchData);
</script>

<style lang="scss">
  .main {
    &-wrapper {
      width: 100%;
      height: 100%;
    }
  }
</style>