<template>
    <main class="mt-0 main-content">
      <section>
        <div class="page-header min-vh-100">
          <div class="container">
            <div class="row">
              <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
                <div class="card card-plain">
                  <div class="pb-0 card-header text-start">
                    <h4 class="font-weight-bolder">Reset Password</h4>
                  </div>
                  <div class="card-body">
                    <form role="form" @submit.prevent="handleResetPassword()">
                      <div class="mb-3">
                        <argon-input
                            id="password"
                            v-model="newPassword.password"
                            type="password"
                            :value="newPassword.password"
                            placeholder="New Password"
                            size="lg"
                            aria-label="New Password"
                        />
                        <div class="mb-3">
                            <validation-error :errors="apiValidationErrors.password" />
                        </div>
                        <argon-input
                            id="password_confirmation"
                            v-model="newPassword.password_confirmation"
                            type="password"
                            :value="newPassword.password_confirmation"
                            placeholder="Repeat Password"
                            size="lg"
                            aria-label="Repeat Password"
                        />
                        <div>
                            <validation-error :errors="apiValidationErrors.token" />
                        </div>
                      </div>
                      <div class="text-center">
                        <argon-button
                          class="mt-4"
                          variant="gradient"
                          color="dark"
                          fullWidth
                          size="lg"
                        ><div v-if="!loading">Submit</div> <i v-else class="fas fa-spinner fa-pulse"></i>
                        </argon-button>
                      </div>
                    </form>
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
  name: "ResetPassword",
  components: {
    ArgonInput,
    ArgonButton,
    ValidationError
  },
  mixins: [formMixin, showSwal],
  data() {
    return {
        newPassword: {
            password: '',
            password_confirmation: '',
            email: this.$route.query.email,
            token: this.$route.query.token
        },
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
  mounted() {
        if(!this.$route.query.email || !this.$route.query.token){
            this.$router.push({name: 'Login'});
        }
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
  methods: {
    async handleResetPassword() {
      try{
        if(this.$isDemo == 1) {
          this.showSwal({
            type: "error",
            message: "Password reset is disabled in the demo.",
            width: 350
          });
        }
        else{
          this.loading = true;
          this.resetApiValidation();
          await this.$store.dispatch("auth/resetPassword", this.newPassword);
          this.showSwal({
              type: "success",
              message: "Password was reseted successfully!",
              width: 330
          });
          await this.$store.dispatch("auth/login", {email: this.newPassword.email, password: this.newPassword.password});
          await this.$router.push({name: 'Dashboard'});
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
  