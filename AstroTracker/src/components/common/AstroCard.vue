<template>
  <Card>
    <template #content>
      <div class="astro-card_wrapper">
        <div class="astro-card_image">
          <AstroIcon :out-size="70" :in-size="props.data.diameter.min" type="safe" sizer/>
        </div>

        <div class="astro-card_info">
          <h3>{{ formattedName }}</h3>

          <div class="infoGroup">
            <p class="--small">Time of Close Contact</p>

            <div class="infoGroup_inner">
              <h4>{{ formattedDate }}</h4>
              <p class="--small">{{ dateHour[1] }}</p>
            </div>
          </div>

          <div class="infoGroup">
            <p class="--small">Distance</p>

            <div class="infoGroup_inner">
              <h4>{{ formattedDistance }}</h4>
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
  import {formatAsteroidName, formatNumberWithCommas, formatTextualDate} from '../../lib/utils';

  export interface SlimNeoEntity {
    id: string,
    name: string,
    dangerous: boolean,
    diameter: {
      min: number,
      max: number
    },
    closeApproac: {
      date: {
        normal: string,
        full: string
      },
      velocity: string,
      distance: string
    }
  }

  const props = defineProps<{
    data: SlimNeoEntity;
  }>();

  const formattedName = formatAsteroidName(props.data.name);
  const formattedDate = formatTextualDate(props.data.closeApproac.date.normal);
  const dateHour = props.data.closeApproac.date.full.split(' ');
  const formattedDistance = formatNumberWithCommas(props.data.closeApproac.distance);
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

            h4 {
              text-transform: uppercase;
            }

            & .--small {
              margin-left: 10px;
            };
          }
        };
      };
    };
  };
</style>
