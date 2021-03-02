<template>
  <div class="container mt--9 pb-5">
    <div class="row justify-content-center">
      <div class="col-lg-5 col-md-7">
        <div class="card bg-secondary border-0 mb-3">
          <div class="card-body px-lg-5 py-lg-5">
            <div class="text-center text-muted mb-4">
              <small>Reset password</small>
            </div>

            <form role="form" @submit.prevent="handleSubmit()">
              <base-input
                alternative
                class="input-group-alternative mb-3"
                placeholder="Email"
                addon-left-icon="ni ni-email-83"
                v-model="form.data.attributes.email"
                name="Email"
              >
              </base-input>
              <validation-error :errors="apiValidationErrors.email" />

              <div class="text-center">
                <!-- <base-button type="submit" @click.prevent="handleSubmit" class="my-4">Sign in</base-button> -->
                <base-button type="primary" native-type="submit" class="my-4"
                  >Send Password Reset Link</base-button
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ValidationError from "@/components/ValidationError.vue";
import formMixin from "@/mixins/form-mixin";
export default {
  name: "PasswordReset",
  mixins: [formMixin],
  components: { ValidationError },
  data() {
    return {
      form: {
        data: {
          type: "password-forgot",
          attributes: {
            email: "",
            redirect_url: process.env.VUE_APP_BASE_URL + "/password/email",
          },
        },
      },
    };
  },
  methods: {
    async handleSubmit() {
      if (this.$isDemo == 1) {
        await this.$notify({
          type: "danger",
          message: "Password reset is disabled in the demo.",
        });
        return;
      }
      try {
        await this.$store.dispatch("reset/forgotPassword", this.form.data);
        await this.$notify({
          type: "success",
          message: "An email with reset password link was sent.",
        });
      } catch (error) {
        await this.$notify({
          type: "danger",
          message: "We can't find a user with that e-mail address.",
        });
        this.setApiValidation(error.response.data.errors);
      }
    },
  },
};
</script>