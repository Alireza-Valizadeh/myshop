<template>
  <v-fab-transition>
    <v-btn
      v-show="fab"
      v-scroll="onScroll"
      fab
      fixed
      bottom
      left
      color="teal"
      @click="toTop"
    >
      <v-icon color="white">{{ icons.arrow }}</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
import { mdiChevronUp } from "@mdi/js";

export default {
  data() {
    return {
      icons: {
        arrow: mdiChevronUp,
      },
      fab: false,
    };
  },
  /* ------------------------------------------------------------------------ */
  methods: {
    onScroll(e) {
      const top = e.srcElement.scrollingElement.scrollTop;
      this.fab = top > 20;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
