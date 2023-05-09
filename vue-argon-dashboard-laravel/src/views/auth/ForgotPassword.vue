<template>
    <main class="mt-0 main-content">
      <section>
        <div class="page-header min-vh-100">
          <div class="container">
            <div class="row">
              <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
                <div class="card card-plain">
                  <div class="pb-0 card-header text-start">
                    <h4 class="font-weight-bolder">Forgot Password</h4>
                    <p class="mb-0">You will receive an e-mail in maximum 60 seconds</p>
                  </div>
                  <div class="card-body">
                    <form role="form" @submit.prevent="handleForgotPassword()">
                      <div class="mb-3">
                        <argon-input
                            v-model="email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            size="lg"
                            :value="email" />
                            <validation-error :errors="apiValidationErrors.email" />
                      </div>
  
                      <div class="text-center">
                        <argon-button
                          class="mt-4"
                          variant="gradient"
                          color="dark"
                          fullWidth
                          size="lg"
                        ><div v-if="!loading">Send</div> <i v-else class="fas fa-spinner fa-pulse"></i>
                        </argon-button>
                      </div>
                    </form>
                  </div>
                  <div class="px-1 pt-0 text-center card-footer px-lg-2">
                    <p class="mx-auto mb-4 text-sm">
                      <router-link
                        :to="{ name: 'Login' }"
                        class="text-dark text-gradient font-weight-bold"
                      >Back to login</router-link>
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column"
              >
                <div
                  class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                  style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg');
            background-size: cover;"
                >
                  <span class="mask bg-gradient-success opacity-6"></span>
                  <h4
                    class="mt-5 text-white font-weight-bolder position-relative"
                  >"Attention is the new currency"</h4>
                  <p
                    class="text-white position-relative"
                  >The more effortless the writing looks, the more effort the writer actually put into the process.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  
<script>
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import formMixin from "../../mixins/form-mixin.js"
import ValidationError from "../../components/ValidationError.vue";
import showSwal from "../../mixins/showSwal.js";
const body = document.getElementsByTagName("body")[0];

export default {
  name: "ForgotPassword",
  components: {
    ArgonInput,
    ArgonButton,
    ValidationError
  },
  mixins: [formMixin, showSwal],
  data() {
    return {
        email: '',
        redirect_url: 'http://localhost:8080/password/reset',
        loading: false
    }
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
  methods: {
    async handleForgotPassword() {
      try{
        if(this.$isDemo == 1) {
          this.showSwal({
            type: "error",
            message: "Password forgot is disabled in the demo.",
            width: 350
          });
        }
        else{
          this.loading = true;
          this.resetApiValidation();
          await this.$store.dispatch("auth/forgotPassword", {email: this.email, redirect_url: this.redirect_url});
          this.showSwal({
              type: "success",
              message: "Reset password email was sent."
          });
          this.loading = false;
        }
      }
      catch(error)
      {
        this.loading = false;
        this.setApiValidation(error.response.data.errors);
        this.showSwal({
          type:"error",
          message: "Oops, something went wrong!"
        });
      }
    }
  }
};
</script>
  