<template>
  <section class="astro-cList_wrapper" v-if="parsedAstros">
    <div class="astro-cList_item" v-for="astro in parsedAstros" :key="astro.id">
      <AstroCard :data="astro"/>
    </div>
  </section>
</template>

<script setup lang="ts">
  import {computed, type ComputedRef} from 'vue';
  import AstroCard from '../../common/AstroCard.vue';
  import {useAstroData} from '../../../stores/astroData';
  import {NeoEntity} from '../../../types/decoders/NeoWs';
  import {SlimNeoEntity} from '../../common/AstroCard.vue';

  const astroStore = useAstroData();

  const astros = astroStore.getDataAstros;

  const parseAstros = (collection: NeoEntity[]) : SlimNeoEntity[] => {
    const parsedAstro = collection.map(c => ({
      id: c.neo_reference_id,
      name: c.name,
      dangerous: c.is_potentially_hazardous_asteroid,
      diameter: {
        min: c.estimated_diameter.meters.estimated_diameter_min,
        max: c.estimated_diameter.meters.estimated_diameter_max
      },
      closeApproac: {
        date: {
          normal: c.close_approach_data[0].close_approach_date,
          full: c.close_approach_data[0].close_approach_date_full
        },
        velocity: c.close_approach_data[0].relative_velocity.kilometers_per_second,
        distance: c.close_approach_data[0].miss_distance.kilometers
      }
    }));
    return parsedAstro;
  };

  const parsedAstros: ComputedRef<SlimNeoEntity[] | null> = computed(() => {
    return astros ? parseAstros(astros) : null;
  });

</script>

<style lang="scss">
  .astro {
    &-cList {
      &_wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
      };

      &_item {
        margin-bottom: 10px;
      };
    };
  };
</style>
