<template>
  <section class="astro-cList_wrapper">
    <template v-if="parsedAstros">
      <div class="astro-cList_item" v-for="astro in parsedAstros" :key="astro.id">
        <AstroCard :data="astro"/>
      </div>
    </template>
  </section>
</template>

<script setup lang="ts">
  import {computed, type ComputedRef} from 'vue';
  import AstroCard from '../../common/AstroCard.vue';
  import {useAstroData} from '../../../stores/astroData';
  import {SlimNeoEntity} from '../../common/AstroCard.vue';
  import {parseAstros} from '../../../lib/utils';

  const astroStore = useAstroData();

  const parsedAstros: ComputedRef<SlimNeoEntity[] | null> = computed(() => {
    return astroStore.getDataAstros ? parseAstros(astroStore.getDataAstros) : null;
  });

</script>

<style lang="scss">
  .astro {
    &-cList {
      &_wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 36vh;
      };

      &_item {
        margin-bottom: 10px;
      };
    };
  };
</style>
