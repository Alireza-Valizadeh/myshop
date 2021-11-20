<template>
  <v-app>
    <LayoutHeader />
    <v-navigation-drawer v-model="showMenu" absolute right temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>
    <FormGoToTopBtn />
    <LayoutLoading />
    <LayoutOverlay>
      <FormText placeholder="جستجو..." />
    </LayoutOverlay>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(['showResponsiveMenu']),
    showMenu: {
      get() {
        return this.showResponsiveMenu;
      },
      set(val) {
        this.setResponsiveMenuState(val);
      },
    },
  },
  methods: {
    ...mapActions(['setResponsiveMenuState']),
  },
};
</script>

<style></style>
