<template>
  <v-col xs="12" md="6" lg="4">
    <v-card min-width="100" min-height="300" hover outlined round>
      <v-img
        src="https://www.motortrend.com/uploads/sites/5/2021/07/2022-Ram-Rebel-GT-1.jpg"
        :alt="title"
      ></v-img>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>{{ description }}</v-card-text>
      <v-card-actions>
        <FormBtnGradiant title="مشاهده جزییات" />
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style></style>
