<template>
  <div class="main-wrapper">
    <Intestation :day="'25 January 2023'" :is-mobile="false"/>

    <AstroGraph />
  </div>
</template>

<script setup lang="ts">
  import {ref, type Ref, onMounted} from 'vue';
  import Intestation from './mainView/Intestation.vue';
  import AstroGraph from './mainView/AstroGraph.vue';
  import {getFeed, getLookup, getBrowse} from '../../server/NeoWs';

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
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
    };
  };
</style>