<template>
  <Card>
    <template #content>
      <div class="astro-card_wrapper">
        <div class="astro-card_image">
          <AstroIcon :out-size="props.oSize" :in-size="props.iSize" type="safe" />
        </div>

        <div class="astro-card_info">
          <!-- <h3>2023BH1</h3> -->
          <h3>{{props.data.name}}</h3>

          <div class="infoGroup">
            <p class="--small">Time of Close Contact</p>

            <div class="infoGroup_inner">
              <!-- <h4>25 JAN 2023</h4> -->
              <h4>{{props.data.contactTime}}</h4>
              <p class="--small">00:02:18</p>
            </div>
          </div>

          <div class="infoGroup">
            <p class="--small">Distance</p>

            <div class="infoGroup_inner">
              <!-- <h4>1,377,769</h4> -->
              <h4>{{props.data.dist}}</h4>
              <p class="--small">Km</p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
  import Card from 'primevue/card';
  import AstroIcon from './AstroIcon.vue';

  interface AstroData {
    name: string,
    contactTime: string,
    dist: string
  }

  const props = defineProps<{
    oSize: number;
    iSize: number;
    data: AstroData;
  }>();
</script>

<style lang="scss">
  .astro {
    &-card {
      &_wrapper {
        display: flex;
        height: 170px;
        width: 100%;
        padding: 20px 15px;
        border-radius: 10px;
        background-color: var(--color-grey-900);
      };

      &_image, &_info {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      };

      &_info {
        flex-direction: column;
        align-items: flex-start;

        & > h3 {
          margin-bottom: 12px;
        };

        .infoGroup {
          display: flex;
          flex-direction: column;

          &:first-of-type {
            margin-bottom: 12px;
          };

          & > .--small {
            text-transform: uppercase;
          };

          &_inner {
            display: flex;
            align-items: center;

            & .--small {
              margin-left: 10px;
            };
          }
        };
      };
    };
  };
</style>
