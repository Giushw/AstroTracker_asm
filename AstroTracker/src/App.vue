<template>
  <main class="home-wrapper">
    <template v-if="currentLayout === 'HomeD'">
      <HomeD />
    </template>

    <template v-else>
      <HomeM />
    </template>
  </main>

  <FooterBanner />
</template>

<script setup lang="ts">
  import {
    type Ref,
    type ComputedRef,
    computed,
    ref,
    onMounted,
    onUnmounted
  } from 'vue';
  import type {Apods} from './types/decoders/Apods';
  import {getApod} from './server/Apod';
  import HomeD from './layouts/HomeD.vue';
  import HomeM from './layouts/HomeM.vue';
  import FooterBanner from './components/home/FooterBanner.vue';

  const apodData: Ref<Apods | null> = ref(null);
  const loading = ref(true);
  const width = ref(window.innerWidth);

  const handleResize = () => {
    width.value = window.innerWidth;
  };

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

  onMounted(() => {
    window.addEventListener('resize', handleResize);
    fetchData()
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

  type ActiveView = 'HomeD' | 'HomeM';

  const currentLayout: ComputedRef<ActiveView> = computed(() => {
    return width.value > 768 ? 'HomeD' : 'HomeM';
  });
</script>

<style lang="scss">
  @import './styles/customTheme';

  .home {
    &-wrapper {
      position: relative;
      z-index: 0;
      height: 100%;
      width: 100vw;
      padding: 28px 26px;
      background: no-repeat url('./assets/images/wall_def.png');
      background-size: cover;

      @include desktop {
        padding: 50px 120px;
        height: 100vh;
      };

      &::after {
        content: '';
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        height: 100%;
        width: 100vw;
        background: var(--gradient-grey);

        @include desktop {
          height: 100vh;
        };
      };
    };
  };
</style>
