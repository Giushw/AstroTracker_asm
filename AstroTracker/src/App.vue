<template>
  <main class="home-wrapper">
    <!-- <Home :srcUrl="apodData.value[0].hdurl" /> -->
    <Home />
  </main>
 
</template>

<script setup lang="ts">
  import {ref, type Ref, onMounted} from 'vue';
  import {getApod} from './server/Apod';
  import type {Apods} from './types/decoders/Apods';
  import Home from './layouts/Home.vue';

  const apodData: Ref<Apods | null> = ref(null);
  const loading = ref(true);

  // console.log('loading 1: ', loading.value);
  // console.log('apodData 1: ', apodData.value);

  const fetchData = async () => {
    try {
      const data = await getApod();
      apodData.value = data;
      console.log('Fetched data: ', data); // Log the fetched data
      console.log('apodData.value: ', apodData.value); // Log the ref value
      
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
      position: relative;
      height: 100vh;
      width: 100vw;
      padding: 28px 26px;
      background: no-repeat url('./assets/images/wall_def.png');
      z-index: 0
      ;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: var(--grey-gradient);
        height: 100vh;
        width: 100vw;
        z-index: 1;
      }


      @media  screen and (min-width: 769px) {
        padding: 50px 120px;
      }
    }
  }
</style>
