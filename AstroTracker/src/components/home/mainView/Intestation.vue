<template>
  <Splitter class="main-intestation_wrapper" :gutter-size="40">
    <SplitterPanel :size="40" :min-size="40" class="main-intestation_logoTypeGroup"> 
      <h1 class="main-intestation_logoType">Astro tracker</h1>
        
      <h3 class="main-intestation_eyelet">{{day}}</h3>
    </SplitterPanel>

    <SplitterPanel :size="60"  :min-size="60" class="main-intestation_infoGroup">
      <p class="main-intestation_info">
        Con il termine lorem ipsum si indica un testo segnaposto utilizzato da grafici, progettisti. 
        <a href="#">nasa.com</a>
      </p>
      
      <p class="main-intestation_info">
        Image of the day:  
        <a href="#">Calliope galaxy, James Webb Telescope</a>
      </p>
    </SplitterPanel>
  </Splitter>
</template>

<script setup lang="ts">
  import {defineProps} from 'vue';
  import Splitter from 'primevue/splitter';
  import SplitterPanel from 'primevue/splitterpanel';

  defineProps<{
    day: string;
  }>();
</script>

<style lang="scss">
  .main {
    &-intestation {
      &_wrapper {
        width: 100%;
        max-height: 5rem;

        @media screen and (min-width: 769px) {
          margin-bottom: 2rem;
        };
      };
    
      &_logoTypeGroup, &_infoGroup {
        display: flex;
        flex-direction: column;
      };

      &_logoType {
        margin-top: -1rem;
        // line-height: 46.32px;
      }

      &_info:first-of-type {
        margin-bottom: 1rem;
      }
    };
  };
</style>
