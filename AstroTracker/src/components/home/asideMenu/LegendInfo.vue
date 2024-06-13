<template>
  <Card class="legend-info">
    <template #title>
      <h2 class="legend-info_title">Legend</h2>
    </template>
    <template #content>
      <div class="legend-info_content">
        <Panel class="legend-info_subsection"  v-for="subSection in subSections">
          <template #header>
            <h4 class="legend-info_subtitle">{{subSection.title}}</h4>
          </template>
          <!-- // TODO: implement Graphs -->
          <template v-if="subSection.type === 'size'">
            <p class="m-0">Lorem ipsum Size.</p>
          </template>

          <template v-if="subSection.type === 'speed'">
            <p class="m-0">Lorem ipsum Speed</p>
          </template>

          <template v-if="subSection.type === 'danger'">
            <p class="m-0">Lorem ipsum Danger</p>
          </template>
        </Panel>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
  import {ref, type Ref} from 'vue';
  import Card from 'primevue/card';
  import Panel from 'primevue/panel';

  type SubsectionType = 'size' | 'speed' | 'danger';

  interface SubsectionPanel  {
    type: SubsectionType,
    title: string
  };

  const subSections: Ref<SubsectionPanel[]> = ref([
    {type: 'size', title: 'How big is it?'},
    {type: 'speed', title: 'Relative Speed'},
    {type: 'danger', title: 'Is it dangerous?'}
  ]);
</script>

<style lang="scss">
  .legend {
    &-info {
      width: 100%; 
      padding: 0.625rem 0.938rem;
      border-radius: 0.938rem;
      background-color: var(--trasparent-grey);

      &_subtitle {
        margin: 0
      };

      &_content {
        display: flex;
        flex-direction: column;
      };
    };
  };
</style>