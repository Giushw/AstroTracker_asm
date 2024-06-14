<template>
  <div class="astro-icon" :class="props.type ? `--${props.type}` : ''">
    <div class="astro-icon_outer" :style="outerSize">
      <div class="astro-icon_inner" :style="innerSize"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {computed} from 'vue';

  type AsteroidType = 'safe' | 'danger' | undefined;

  const props = defineProps<{
    outSize: number;
    inSize: number;
    type: AsteroidType;
  }>();

  const outerSize = computed(() => ({
    '--outer-size': `${props.outSize}px`,
  }));

  const innerSize = computed(() => ({
    '--inner-size': `${props.inSize}px`,
  }));
</script>

<style lang="scss">
  /* Standard sizes
    L = 50px
    M = 35px
    S = 25px
  */
  .astro {
    &-icon {
      &_outer, &_inner {
        border-radius: 50%;
      };

      &_outer {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: var(--outer-size);
        height: var(--outer-size);
        border: 1px solid  var(--color-white);
        background-image: var(--gradient-white);

        @include desktop {
          background-image: var(--gradient-greyscale);
        }

        .--safe & {
          border-color: var(--color-safe-300);
          background-image: var(--gradient-safe);
        };

        .--danger & {
          border-color: var(--color-danger-300);
          background-image: var(--gradient-danger);
        };
      };


      &_inner {
        z-index: 2;
        width:  var(--inner-size);
        height:  var(--inner-size);
        background-color: var(--color-grey-900);

        @include desktop {
          background-color: var(--color-white);
        }

        .--safe & {
          background-color: var(--color-safe-700);
        };

        .--danger & {
          background-color: var(--color-danger-700);
        };
      };
    };
  };
</style>
