<template>
  <v-overlay :value="showOverlay">
    <slot></slot>
  </v-overlay>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: { ...mapGetters(['showOverlay']) },
  methods: {
    ...mapActions(['setOverlayState']),
  },
};
</script>
