<template>
  <article class="legend-info_content">
    <Panel class="legend-info_subsection"  v-for="subSection in activeSubsection">
      <template #header>
        <h4 class="legend-info_subtitle">{{subSection.title}}</h4>
      </template>
      <!-- // TODO: implement Graphs -->
      <template v-if="subSection.type === 'size'">
        <div class="legend-info_sizePanel">
          <div>
            <AstroSizeIcon />
            
            <div class="legend-info_sizes">
              <p class="--small">10.000m</p>
              <p class="--small">1.000m</p>
              <p class="--small">100m</p>
            </div>
          </div>
          <div>
            <AstroIcon :out-size="59" :in-size="isMobile ? 43 : 29" :type="undefined" :sizer="false"/>
            <div class="legend-info_radiuses">
              <div class="legend-info_radiusGroup">
                <div class="sphere"></div>
                <p class="--small">Min Radius</p>
              </div>
              
              <div class="legend-info_radiusGroup">
                <div class="sphere"></div>
                <p class="--small">Max Radius</p>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template v-if="subSection.type === 'speed'">
        <div class="legend-info_speedPanel">
          <div class="scie"></div>
          <Divider />
          <p class="--small"> XXXX Km/s</p>
        </div>
      </template>

      <template v-if="subSection.type === 'danger'">
        <div class="legend-info_dangerPanel">
          <div>
            <AstroIcon :out-size="59" :in-size="39" type="safe" :sizer="false" />
            <p class="--small">Asteroid is not a treat</p>
          </div>
          <div>
            <AstroIcon :out-size="59" :in-size="39" type="danger" :sizer="false" />
            <p class="--small">Asteroid may be dangerous</p>
          </div>
        </div>
      </template>
    </Panel>
  </article>
</template>

<script setup lang="ts">
  import {type ComputedRef, computed} from 'vue';
  import Panel from 'primevue/panel';
  import Divider from 'primevue/divider';
  import AstroSizeIcon from '../common/AstroSizeIcon.vue';
  import AstroIcon from '../common/AstroIcon.vue';

  type SubsectionType = 'size' | 'speed' | 'danger';

  interface SubsectionPanel  {
    type: SubsectionType,
    title: string
  };

  const mobileSection: SubsectionPanel[] = [
    {type: 'size', title: 'How big is it?'},
    {type: 'danger', title: 'Is it dangerous?'}
  ];

  const desktopSections: SubsectionPanel[] = [
    {...mobileSection[0]},
    {type: 'speed', title: 'Relative Speed'},
    {...mobileSection[1]}
  ];

  const props = defineProps<{
    isMobile: boolean
  }>();

  const activeSubsection: ComputedRef<SubsectionPanel[]> = computed(() => {
    return props.isMobile ? mobileSection : desktopSections;
  });

</script>

<style lang="scss">
  .scie {
    // width: 43.89px;
    width: 218px;
    height: 43.89px;
    background-color: var(--color-grey-100); 
  };

  .legend {
    &-info {
      width: 100%; 
      padding: 10px 15px;
      border-radius: 15px;
      background-color: var(--trasparent-grey);

      &_subtitle {
        margin: 0
      };

      &_content {
        display: flex;
        flex-direction: column;
      };

      &_sizePanel {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        & > * {
          width: 50%;
          display: flex;
          align-items: flex-end;

          &:first-child {
            margin-right: 10px;
          }
        };
      };

      &_sizes, &_radiuses {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        margin-left: 15px;
      };

      &_sizes {
        p {
          margin-top: 10px;
        }
      }

      &_radiuses {
        p {
          margin-bottom: 10px;

          @include desktop {
            margin-bottom: 22px;
          }

          &:last-of-type {
            margin-bottom: 0;
          };

          &::after {
            @include desktop {
              content: '';
              display: block;
              height: 1px;
              width: 75px;
              border-bottom: 1px dashed var(--color-white);
              transform: translateX(-50%);
            };
          };
        };
      };

      &_radiusGroup {
        display: flex;
        justify-content: space-between;

        &:first-of-type {
          margin-bottom: 10px;

          @include desktop {
            margin-bottom: 22px;
          };

          .sphere {
            background-color: var(--color-grey-900);
          };
        };

        .sphere {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background-color: var(--color-white);
          margin-right: 5px;

          @include desktop {
            display: none;
          };
        };
      };

      &_speedPanel {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;

        .p-divider-horizontal {
          margin-top: 10px;
          margin-bottom: 5px;
        }

        p {
          text-align: right;
        }
      };

      &_dangerPanel {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        & > * {
          width: 50%;
          display: flex;
          align-items: flex-end;

          &:first-child {
            margin-right: 10px;
          }
        };

        p {
          margin-left: 15px;
        }
      };
    };
  };
</style>