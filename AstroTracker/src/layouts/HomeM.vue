<template>
  <div class="home-mobile_wrapper">
    <Intestation is-mobile/>

    <AstroCardList />

    <div class="home-mobile_legendBtn">
      <slideDialog label="Legend" slide="bottom" allign="center">
        <LegendInfo is-mobile/>
      </slideDialog>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Intestation from '../components/home/mainView/Intestation.vue';
  import AstroCardList from '../components/home/mainView/AstroCardList.vue';
  import slideDialog from '../components/common/SlideDialog.vue';
  import LegendInfo from '../components/common/LegendInfo.vue';

</script>

<style lang="scss">
  .home {
    &-mobile {
      &_wrapper {
        display: flex;
        flex-direction: column;
        padding: 28px 26px;
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