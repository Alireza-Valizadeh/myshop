<template>
  <v-dialog
    v-model="visibility"
    :fullscreen="fullScreen"
    :persistent="persistent"
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card :class="{ blured: isBlured }">
      <v-toolbar id="container" color="grey">
        <v-btn color="error" icon text large @click="setModalState(false)">
          <v-icon>{{ $vuetify.icons.values.closeThick }}</v-icon>
        </v-btn>

        <v-toolbar-title>
          {{ title }}
        </v-toolbar-title>
      </v-toolbar>

      <v-container>
        <slot />
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { mdiChevronUp } from '@mdi/js';

export default {
  props: {
    fullScreen: {
      type: Boolean,
      default: false,
    },
    persistent: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
      required: false,
    },
  },
  computed: {
    ...mapState(['isFullScreenModalVisible', 'isBlured']),
    visibility: {
      get() {
        return this.isFullScreenModalVisible;
      },
      set(val) {
        return this.setModalState(val);
      },
    },
  },
  data() {
    return {
      icons: {
        arrow: mdiChevronUp,
      },
    };
  },
  methods: {
    ...mapActions(['setModalState']),
  },
};
</script>

<style></style>
