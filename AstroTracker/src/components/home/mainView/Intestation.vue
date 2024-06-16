<template>
  <Splitter 
    class="main-intestation_wrapper"
    :gutter-size="40" 
    :layout="isMobile ? 'vertical' : 'horizontal'"
  >
    <SplitterPanel 
      class="main-intestation_logoTypeGroup"
      :size="isMobile ? 50 : 40" 
      :min-size="isMobile ? 50 : 40" 
    > 
      <h1 class="main-intestation_logoType">Astro tracker</h1>
        
      <div class="main-intestation_eyeletGroup">
        <h3 class="main-intestation_eyelet">{{ date }}</h3>

        <template v-if="isMobile">
          <SlideDialog label="Info" slide="top" allign="right">
            <p>
              Con il termine lorem ipsum si indica un testo segnaposto utilizzato da grafici, progettisti, programmatori e tipografi a modo riempitivo per bozzetti e prove grafiche.
            </p>
          </SlideDialog>
        </template>
      </div>
    </SplitterPanel>

    <SplitterPanel
      class="main-intestation_infoGroup"
      :size="isMobile ? 50 : 60"  
      :min-size="isMobile ? 50 : 60"  
    >
      <p class="main-intestation_info">
        Con il termine lorem ipsum si indica un testo segnaposto utilizzato da grafici, progettisti. 
        <a href="https://www.nasa.gov/">nasa.com</a>
      </p>
      
      <p class="main-intestation_info --imotd">
        Image of the day:  
        <a href="https://images.nasa.gov/">{{ astroStore.apodName }}</a>
      </p>
    </SplitterPanel>
  </Splitter>
</template>

<script setup lang="ts">
  import {type ComputedRef, computed} from 'vue';
  import Splitter from 'primevue/splitter';
  import SplitterPanel from 'primevue/splitterpanel';
  import SlideDialog from '../../common/SlideDialog.vue';
  import {useAstroData} from '../../../stores/astroData';
  import {formatTextualDate} from '../../../lib/utils';

  defineProps<{
    isMobile: boolean;
  }>();

  const astroStore = useAstroData();

  const date: ComputedRef<string> = computed(() => {
    return astroStore.getDataDate ? formatTextualDate(astroStore.getDataDate, true) : 'N/D';
  });
</script>

<style lang="scss">
  .main {
    &-intestation {
      &_wrapper {
        width: 100%;
        margin-bottom: 40px;

        @include desktop {
          margin-bottom: 32px;
          max-height: 80px;
        };
      };
    
      &_logoTypeGroup {
        display: flex;
        flex-direction: row;

        @include desktop {
          flex-direction: column;
        };

        & > * {
          @include mobile {
            width: 50%;
          };
        };
      };

      &_logoType {
        line-height: 1;

        @include desktop {
          margin-top: -16px;
          line-height: 76.32px;
        };
      };

      &_eyelet {
        margin-top: 18px;
        margin-bottom: 8px;

        @include mobile {
          text-align: right;
        };

        @include desktop {
          margin: 0;
        };
      };

      &_infoGroup {
        display: flex;
        flex-direction: column;
      };

      &_info {
        &:first-of-type {
          @include desktop {
            margin-bottom: 16px;
          };
        };

        a {
          display: block;

          @include desktop {
            display: inline;
          };
        }

        &.--imotd {
          display: none;

          @include desktop {
            display: block;
          };
        }
      }
    };
  };
</style>
