<template>
  <Card class="speed-mode">
    <!-- <template #header>
        <img alt="user header" src="/images/usercard.png" />
    </template> -->
    <template #title>
      <h2 class="speed-mode_title">Speed</h2>
    </template>
    <!-- <template #subtitle>Card subtitle</template> -->
    <template #content>
      <p class="speed-mode_content">
        Con il termine lorem ipsum si indica un testo segnaposto utilizzato da grafici, 
        progettisti, programmatori e tipografi a modo riempitivo per bozzetti e prove grafiche.
      </p>
    </template>
    <template #footer>
      <div class="speed-mode_footer">
        <InputSwitch v-model="checked"/>

        <h3 class="speed-mode_info">Activate speed visual</h3>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Card from 'primevue/card';
  import InputSwitch from 'primevue/inputswitch';

  const checked = ref(false);

</script>

<style lang="scss">
  .speed {
    &-mode {
      width: 100%; 
      padding: 10px 15px;

      &_title {
        margin: 0
      }

      &_content {
        margin: 0;
      }

      &_footer {
        display: flex;
        margin-top: 10px;
      }

      &_info {
        margin: 0;
        margin-left: 20px;
      }

      /* OverRide */
      .p-card-body {
        padding: 0;
      }
    }
  }


</style>