<template>
  <div class="row justify-content-center">
    <div class="col-lg-5 col-md-7">
      <div class="card bg-secondary shadow border-0">
        <div class="card-header bg-transparent pb-5">
          <div class="text-muted text-center mt-2 mb-3">
            <small>Sign in with</small>
          </div>
          <div class="btn-wrapper text-center">
            <a href="#" class="btn btn-neutral btn-icon mr-4">
              <span class="btn-inner--icon"
                ><img src="/img/icons/common/github.svg"
              /></span>
              <span class="btn-inner--text">Github</span>
            </a>
            <a href="#" class="btn btn-neutral btn-icon">
              <span class="btn-inner--icon"
                ><img src="/img/icons/common/google.svg"
              /></span>
              <span class="btn-inner--text">Google</span>
            </a>
          </div>
        </div>
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <small>Or sign in with credentials</small>
          </div>
          <form role="form" @submit.prevent="handleSubmit()">
            <base-input
              alternative
              class="input-group-alternative mb-3"
              placeholder="Email"
              addon-left-icon="ni ni-email-83"
              v-model="email"
              name="Email"
            >
            </base-input>
            <validation-error :errors="apiValidationErrors.email" />

            <base-input
              alternative
              class="input-group-alternative"
              placeholder="Password"
              type="password"
              addon-left-icon="ni ni-lock-circle-open"
              v-model="password"
              name="Password"
            >
            </base-input>
            <validation-error :errors="apiValidationErrors.password" />

            <base-checkbox class="custom-control-alternative">
              <span class="text-muted">Remember me</span>
            </base-checkbox>
            <div class="text-center">
              <base-button type="primary" native-type="submit" class="my-4"
                >Sign in</base-button
              >
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <router-link to="/password/reset" class="text-light"
            ><small>Forgot password?</small></router-link
          >
        </div>
        <div class="col-6 text-right">
          <router-link to="/register" class="text-light"
            ><small>Create new account</small></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ValidationError from "@/components/ValidationError.vue";
import formMixin from "@/mixins/form-mixin";
export default {
  name: "login",
  components: {
    ValidationError,
  },
  mixins: [formMixin],
  data: () => ({
    email: "admin@jsonapi.com",
    password: "secret",
  }),
  computed: {
    isAuthenticated: function () {
      return this.$store.getters.isAuthenticated();
    },
  },
  methods: {
    async handleSubmit() {
      const user = {
        data: {
          type: "token",
          attributes: {
            email: this.email,
            password: this.password,
          },
        },
      };

      const requestOptions = {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
        },
      };

      try {
        await this.$store.dispatch("login", { user, requestOptions });
      } catch (error) {
        this.$notify({
          type: "danger",
          message: "Invalid credentials!",
        });
        this.setApiValidation(error.response.data.errors);
      }
    },
  },
};
</script>