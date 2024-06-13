<template>
  <Card class="speed-mode">
    <template #title>
      <h2 class="speed-mode_title">Speed</h2>
    </template>

    <template #content>
      <p class="speed-mode_content">
        Con il termine lorem ipsum si indica un testo segnaposto utilizzato da grafici, 
        progettisti, programmatori e tipografi a modo riempitivo per bozzetti e prove grafiche.
      </p>
    </template>

    <template #footer>
      <div class="speed-mode_footer">
        <InputSwitch v-model="checked" @change="handleSwitchSpeed"/>

        <h3 class="speed-mode_info">Activate speed visual</h3>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
  import {ref} from 'vue';
  import Card from 'primevue/card';
  import InputSwitch from 'primevue/inputswitch';

  const checked = ref(false);
  const emit = defineEmits(['switchSpeedMode']);

  const handleSwitchSpeed = () => {
    emit('switchSpeedMode', checked);
  };
</script>

<style lang="scss">
  .speed {
    &-mode {
      width: 100%;
      height: 100%;
      padding: 0.625rem 0.938rem;
      border-radius: 0.938rem;
      background-color: var(--trasparent-grey);

      &_content {
        margin: 0;
      }

      &_footer {
        display: flex;
        margin-top: 0.625rem;
      }

      &_info {
        margin: 0;
        margin-left: 1.25rem;
      }
    }
  }
</style>