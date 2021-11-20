<template>
  <Hooper :settings="hooperSettings">
    <v-row>
      <!-- v-for on slide -->
      <Slide> </Slide>
    </v-row>
    <hooper-navigation slot="hooper-addons">
      <div class="custom-arrow" slot="hooper-next">
        <img class="arrow" alt="sell" />
      </div>
      <div class="custom-arrow" slot="hooper-prev">
        <img class="arrow" alt="sell" />
      </div>
    </hooper-navigation>
  </Hooper>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 3.3,
        itemsToSlide: 1,
        trimWhiteSpace: true,
        mouseDrag: false,
        rtl: true,
        breakpoints: {
          576: {
            itemsToShow: 2.2,
          },
          280: {
            itemsToShow: 1.2,
          },
          400: {
            itemsToShow: 1.4,
          },
          500: {
            itemsToShow: 2.3,
          },
          768: {
            itemsToShow: 1.5,
          },
          992: {
            itemsToShow: 2.8,
          },
          1200: {
            itemsToShow: 3.3,
          },
        },
      },
    };
  },
};
</script>

<style></style>
