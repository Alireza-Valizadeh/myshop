<template>
  <v-app-bar app elevation="5" class="w-100">
    <v-container>
      <v-row align-content="center" class="align-items-center">
        <v-col cols="8" align-self="center">
          <v-row>
            <v-btn
              class="d-md-none"
              icon
              fab
              @click="setResponsiveMenuState(!showResponsiveMenu)"
            >
              <v-icon> {{ $vuetify.icons.values.menuBar }} </v-icon>
            </v-btn>
            <NuxtLink to="/">
              <div>
                <v-img width="50" :src="require('~/assets/logo.jpg')"></v-img>
              </div>
            </NuxtLink>
          </v-row>
        </v-col>
        <v-col cols="4">
          <v-row>
            <v-col
              cols="12"
              md="4"
              align-self="center"
              class="text-left text-md-center"
            >
              <v-icon @click="setOverlayState(true)">
                {{ $vuetify.icons.values.search }}
              </v-icon>
              <v-icon>
                {{ $vuetify.icons.values.basket }}
              </v-icon>
            </v-col>
            <v-col class="d-none d-md-block" cols="6" md="8">
              <v-btn
                :disabled="$route.name === 'register-sign-in' ? true : false"
                @click="$router.push({ path: '/register/sign-in' })"
                >ورود</v-btn
              >
              <v-btn
                :disabled="$route.name === 'register-sign-up' ? true : false"
                @click="$router.push({ path: '/register/sign-up' })"
                >ثبت نام</v-btn
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(['showResponsiveMenu']),
  },
  methods: {
    ...mapActions(['setResponsiveMenuState', 'setOverlayState']),
  },
};
</script>

<style></style>
