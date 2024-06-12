<template>
  <main class="home-wrapper">
    <Home />
  </main>
  <!-- <div>
    <Chart type="scatter" :data="scatterData"></Chart>
  </div> -->
</template>

<script setup lang="ts">
  import {ref, type Ref, onMounted} from 'vue';
  import Chart from 'primevue/chart';
  import {getFeed, getLookup, getBrowse} from './server/NeoWs';
  import {getApod} from './server/Apod';
  import Home from './layouts/Home.vue';

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
    const apodData: Ref<unknown> = ref(null);
    const loading = ref(true);

    // console.log('feedDatao 1: ', feedData.value);
    // console.log('lookupData 1: ', lookupData.value);
    // console.log('browseData 1: ', browseData.value);
    // console.log('loading 1: ', loading.value);
    // console.log('apodData 1: ', apodData.value);

    const fetchData = async () => {
      try {
        feedData.value = await getFeed('2023-06-01', '2023-06-07');
        lookupData.value = await getLookup('3542519');
        browseData.value = await getBrowse();
        apodData.value = await getApod();

        // console.log('feedDatao 2: ', feedData.value);
        // console.log('lookupData 2: ', lookupData.value);
        // console.log('browseData 2: ', browseData.value);
        // console.log('loading 2: ', loading.value);
        // console.log('apodData 2: ', apodData.value);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(fetchData);
</script>

<style lang="scss">
  .home {
    &-wrapper {
      height: 100vh;
      width: 100vw;
      padding: 50px 120px;
    }
  }
</style>
