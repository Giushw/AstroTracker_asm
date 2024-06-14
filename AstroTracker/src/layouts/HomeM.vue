<template>
  <div class="home-mobile_wrapper">
    <Intestation :day="'25 January 2023'" is-mobile/>

    <!-- <AstroCards /> -->
    <div class="home-mobile_placeholder"></div>

    <div class="home-mobile_legendBtn">
      <slideDialog label="Legend" slide="bottom" allign="center">
        <p>
          Con il termine lorem ipsum si indica un testo segnaposto utilizzato da grafici, progettisti, programmatori e tipografi a modo riempitivo per bozzetti e prove grafiche.
        </p>
      </slideDialog>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Intestation from '../components/home/mainView/Intestation.vue';
  // import AstroCards from '../components/home/mainView/AstrCards.vue';
  import slideDialog from '../components/common/SlideDialog.vue';
</script>

<style lang="scss">
  .home {
    &-mobile {
      &_wrapper {
        display: flex;
        flex-direction: column;
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 2;
        background-color: transparent;
      };

      &_placeholder {
        height: 826px;
      };

      &_legendBtn {
        position: sticky;
        bottom: 50px;
        left: 50%;
        z-index: 3;
      }
    };
  };
</style>