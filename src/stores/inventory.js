import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useInventoryStore = defineStore('inventory', {
  state: () => ({
    items: ref([
        {count:4, color1: '#7FAA65', color2: 'rgba(184.24, 216.75, 151.73, 0.35)'},
        {count:2, color1: '#AA9765', color2: 'rgba(216.75, 186.84, 151.73, 0.35)'},
        {count:5, color1: '#656CAA', color2: 'rgba(116.49, 128.54, 236.94, 0.35)'}
    ]),
  }),
  actions: {
    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
});
