<template>
  <main class="home-wrapper">
    <div class="home-wrapper_backdrop">
      <Image class="home-wrapper_background" :src="randomBg" alt="Galaxy Background"/>
    </div>

    <div class="home-wrapper_forefront">
      <template v-if="currentLayout === 'HomeD'">
        <HomeD />
      </template>

      <template v-else>
        <HomeM />
      </template>

      <FooterBanner />
    </div>
  </main>
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
  import Image from 'primevue/image';
  import type {Apods} from './types/decoders/Apods';
  import type {NeoWs} from './types/decoders/NeoWs';
  import {getApod} from './server/Apod';
  import {getFeed} from './server/NeoWs';
  import HomeD from './layouts/HomeD.vue';
  import HomeM from './layouts/HomeM.vue';
  import FooterBanner from './components/home/FooterBanner.vue';
  import {getRandomInt} from './lib/utils';

  const apodData: Ref<Apods | null> = ref(null);
  const neowData: Ref<NeoWs | null> = ref(null);
  const loading = ref(true);
  const width = ref(window.innerWidth);

  const handleResize = () => {
    width.value = window.innerWidth;
  };

  const fetchData = async () => {
    try {
      const dataA = await getApod();
      const dataF = await getFeed();

      apodData.value = dataA;
      // console.log('Fetched data: ', data);
      // console.log('apodData.value: ', apodData.value);
      neowData.value = dataF;
      // console.log('Fetched data feed: ', dataF);
      // console.log('feedData.value: ', neowData.value);

      
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

  const randomBg: ComputedRef<string> = computed(() => {
    if (apodData && apodData.value) {
      const listOfUrl = apodData?.value.map(val => val.hdurl);
      const length = listOfUrl.length;
      return listOfUrl[getRandomInt(length)];
    } else {
      return './assets/images/wall_def.png';
    };
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

      @include desktop {
        height: 100vh;
      };

      &_backdrop {
        position: relative;
        // z-index: 0;
        height: 100%;
        width: 100%;
      };

      &_background {
        display: block;
        width: 100vw;
        height: 100vh;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        };
      };

      &_forefront {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        background: var(--gradient-grey);

        @include desktop {
          padding: 50px 120px;
          height: 100vh;
        };
      }
    };
  };
</style>
