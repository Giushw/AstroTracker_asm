
<template>
  <div class="slide-dialog_wrapper" :class=" `--${allign}`">
    <Button 
      class="slide-dialog_button"
      @click="openPosition(props.slide)"
      severity="secondary" 
      rounded
    >
      <h4>{{props.label}}</h4>
      <span class="pi pi-info-circle"></span>
    </Button>

    <Dialog 
      v-model:visible="visible" 
      :style="{ width: '400px' }" 
      :position="position" 
      :modal="true" 
      :draggable="false"
    >
      <template #header>
        <h3>{{ props.label }}</h3>
      </template>

        <slot></slot>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
  import {ref, type Ref} from "vue";
  import Button from 'primevue/button';
  import Dialog, {type DialogProps} from 'primevue/dialog';

  type Positions = DialogProps['position'];
  type AlignType = 'left' | 'center' | 'right';

  const props = defineProps<{
    slide: Positions;
    label: string;
    allign: AlignType;
  }>();

  const position: Ref<Positions> = ref(undefined);
  const visible = ref(false);

  const openPosition = (pos: Positions) => {
    position.value = pos;
    visible.value = true;
  };
</script>

<style lang="scss">
  .slide {
    &-dialog {
      &_wrapper {
        display: flex;
        align-items: center;

        &.--left {
          justify-content: left;
        };

        &.--center {
          justify-content: center;
        };

        &.--right {
          justify-content: right;
        };

      };
      &_button {
        justify-content: space-between;
        color: var(--color-white);
      };
    };
  };
</style>