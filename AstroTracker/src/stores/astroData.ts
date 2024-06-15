import {defineStore} from 'pinia';
import type {NeoWs, NeoEntity} from '../types/decoders/NeoWs';

interface AstroState {
  astroData: NeoWs['near_earth_objects'] | null;
  apodName: string
};

export const useAstroData = defineStore('astroData', {
  state: (): AstroState => ({
    astroData: null,
    apodName: ''
  }),
  getters: {
    getDataDate(): string {
      const dataDates = this.astroData ? Object.keys(this.astroData) : ['N/D'];
      return dataDates[0];
    },
    getDataAstros(): NeoEntity[] | null {
      if (this.astroData) {
        const keys = Object.keys(this.astroData);

        return this.astroData[keys[0]];
      } else {
        return null;
      };
    }
  },
  actions: {
    setAstroData(store: NeoWs) {
      this.astroData = store.near_earth_objects;
    },
    setApodName(name: string) {
      this.apodName = name;
    }
  },
});
