<template>
  <v-text-field
    v-bind="$attrs"
    outlined
    color="info"
    hide-details="auto"
    :class="textFieldClasses"
    v-on="$listeners"
    :auto-complete="false"
  />
</template>

<script>
export default {
  props: {
    textFieldClasses: {
      type: String,
      default: '',
    },
  },
};
</script>
