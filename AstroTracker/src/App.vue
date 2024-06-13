<template>
  <main class="home-wrapper">
    <Home />
  </main>

  <FooterBanner />
</template>

<script setup lang="ts">
  import {ref, type Ref, onMounted} from 'vue';
  import {getApod} from './server/Apod';
  import type {Apods} from './types/decoders/Apods';
  import Home from './layouts/Home.vue';
  import FooterBanner from './components/home/FooterBanner.vue';


  const apodData: Ref<Apods | null> = ref(null);
  const loading = ref(true);

  // console.log('loading 1: ', loading.value);
  // console.log('apodData 1: ', apodData.value);

  const fetchData = async () => {
    try {
      const data = await getApod();
      apodData.value = data;
      console.log('Fetched data: ', data); 
      console.log('apodData.value: ', apodData.value);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchData);
</script>

<style lang="scss">
  @import './styles/customTheme.scss';

  .home {
    &-wrapper {
      position: relative;
      z-index: 0;
      height: 100vh;
      width: 100vw;
      padding: 1.75rem 1.625rem;
      background: no-repeat url('./assets/images/wall_def.png');
      background-size: cover;

      @media screen and (min-width: 769px) {
        padding: 3.125rem 7.5rem;
      };

      &::after {
        content: '';
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background: var(--gradient-grey);
      };
    };
  };
</style>
