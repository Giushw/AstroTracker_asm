<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <div>
    <DataTable :value="products">
      <Column field="name" header="Name"></Column>
      <Column field="price" header="Price"></Column>
    </DataTable>
  </div>
  <div>
    <Chart type="scatter" :data="scatterData"></Chart>
  </div>
</template>

<script setup lang="ts">
  import {ref, type Ref, onMounted} from 'vue';
  import DataTable from 'primevue/datatable';
  import Column from 'primevue/column';
  import Chart from 'primevue/chart';
  import HelloWorld from './components/HelloWorld.vue';
  import {getFeed, getLookup, getBrowse} from './server/NeoWs';
  import {getApod} from './server/Apod';

  const products: Ref<any> = ref([
    { name: 'Product 1', price: 100 },
    { name: 'Product 2', price: 200 }
  ]);
  
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

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
