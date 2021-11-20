<template>
  <v-form ref="loginForm" @submit.prevent="submitForm">
    <v-container>
      <FormText
        label="ایمیل"
        textFieldClasses="my-2"
        outlined
        required
        :rules="[emailFormatRule, mustFillRule]"
        :input-value="loginUser.email"
        :append-icon="$vuetify.icons.values.email"
        @change="lazyCaller(() => updateLoginUser({ k: 'email', v: $event }))"
      />
      <FormText
        label="رمزعبور"
        textFieldClasses="my-2"
        outlined
        required
        :rules="[passwordFormatRule, mustFillRule]"
        :input-value="loginUser.password"
        :append-icon="$vuetify.icons.values.password"
        @change="
          lazyCaller(() => updateLoginUser({ k: 'password', v: $event }))
        "
      />
      <v-btn type="action"> ورود </v-btn>
    </v-container>
  </v-form>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import lazyCaller from '../../mixins/lazyCaller';
import {
  emailFormatRule,
  mustFillRule,
  passwordFormatRule,
} from '../../utils/validations';
export default {
  mixins: [lazyCaller],
  computed: {
    ...mapState(['data']),
    ...mapGetters('register', ['loginUser']),
  },
  methods: {
    emailFormatRule,
    mustFillRule,
    passwordFormatRule,
    ...mapActions('register', ['updateLoginUser', 'signIn']),
    submitForm() {
      if (this.$refs.loginForm.validate()) this.signIn();
    },
  },
};
</script>

<style></style>
