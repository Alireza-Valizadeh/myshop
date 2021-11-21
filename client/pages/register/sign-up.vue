<template>
  <v-container>
    <v-card class="px-7 py-7">
      <v-form @submit.prevent="submitForm" ref="createUserForm">
        <FormText
          @input="
            lazyCaller(() => updateCreateUserArr({ k: 'name', v: $event }))
          "
          :value="newUser.name"
          :rules="[mustFillRule]"
          :append-icon="$vuetify.icons.values.user"
          textFieldClasses="my-2"
          label="نام"
          required
          outlined
          name="text"
        />
        <FormText
          @input="
            lazyCaller(() => updateCreateUserArr({ k: 'family', v: $event }))
          "
          :value="newUser.family"
          :rules="[mustFillRule]"
          :append-icon="$vuetify.icons.values.user"
          textFieldClasses="my-2"
          label="نام خانوادگی"
          outlined
          required
          name="text"
        />
        <FormText
          @input="
            lazyCaller(() => updateCreateUserArr({ k: 'email', v: $event }))
          "
          :value="newUser.email"
          :rules="[emailFormatRule, mustFillRule]"
          :append-icon="$vuetify.icons.values.email"
          textFieldClasses="my-2"
          label="ایمیل"
          required
          outlined
          type="email"
        />
        <FormText
          :type="passwordInputType"
          :value="newUser.password"
          label="رمزعبور"
          textFieldClasses="my-2"
          required
          outlined
          @copy.prevent
          @cut.prevent
          @paste.prevent
          :rules="[mustFillRule, passwordFormatRule]"
          @input="updateCreateUserArr({ k: 'password', v: $event })"
          :append-icon="
            showPassword
              ? $vuetify.icons.values.eyeClose
              : $vuetify.icons.values.eye
          "
          @click:append="showPassword = !showPassword"
        />
        <FormText
          :type="confirmPasswordInputType"
          :value="newUser.confirmPassword"
          label="تکرار رمزعبور"
          textFieldClasses="my-2"
          :rules="[mustFillRule, matchPassword]"
          required
          outlined
          @copy.prevent
          @cut.prevent
          @paste.prevent
          @input="updateCreateUserArr({ k: 'confirmPassword', v: $event })"
          :append-icon="
            showConfirmPassword
              ? $vuetify.icons.values.eyeClose
              : $vuetify.icons.values.eye
          "
          @click:append="showConfirmPassword = !showConfirmPassword"
        />
        <v-btn type="action">ثبت نام</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import {
  emailFormatRule,
  mustFillRule,
  passwordFormatRule,
} from '../../utils/validations';
import lazyCaller from '~/mixins/lazyCaller';
export default {
  mixins: [lazyCaller],
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  computed: {
    ...mapGetters('register', ['newUser']),
    passwordInputType() {
      if (this.showPassword) return 'text';
      else return 'password';
    },
    confirmPasswordInputType() {
      if (this.showConfirmPassword) return 'text';
      else return 'password';
    },
  },
  methods: {
    mustFillRule,
    emailFormatRule,
    passwordFormatRule,
    ...mapActions('register', ['updateCreateUserArr', 'createNewUser']),
    matchPassword() {
      if (this.newUser.password === this.newUser.confirmPassword) return true;
      else return 'رمزعبور وارد شده با تکرار آن مطابقت ندارد!';
    },
    submitForm() {
      if (this.$refs.createUserForm.validate()) this.createNewUser();
    },
  },
};
</script>
