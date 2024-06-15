import {reactive} from "vue";

export const astroContext = {
  neos: reactive({
    name: 'Mario',
    age: 30,
  }),
  // ... altre proprietà e funzioni
};
