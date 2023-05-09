<template>
    <div class="container top-0 position-sticky z-index-sticky">
      <div class="row">
        <div class="col-12">
          <navbar
            isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow"
            v-bind:darkMode="true"
            isBtn="bg-gradient-success"
          />
        </div>
      </div>
    </div>
    <main class="mt-0 main-content">
      <section>
        <div class="page-header min-vh-100">
          <div class="container">
            <div class="row">
              <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
                <div class="card card-plain">
                  <div class="pb-0 card-header text-start">
                    <h4 class="font-weight-bolder">Sign In</h4>
                    <p>Enter your email and password to sign in</p>
                    <p class="mb-0">You can log in with:</p>
                    <p>Email: <strong>admin@jsonapi.com</strong> | Password: <strong>secret</strong></p>
                  </div>
                  <div class="card-body">
                    <form role="form" @submit.prevent="handleLogin()">
                      <div class="mb-3">
                        <argon-input
                            v-model="user.email"
                            type="email"
                            class="mb-0"
                            placeholder="Email"
                            name="email"
                            size="lg"
                            :value="user.email" />
                            <validation-error :errors="apiValidationErrors.email" />
                      </div>
                      <div class="mb-3">
                        <argon-input
                            v-model="user.password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            size="lg"
                            :value="user.password" />
                      </div>
                      <argon-switch id="rememberMe">Remember me</argon-switch>
  
                      <div class="text-center">
                        <argon-button
                          class="mt-4"
                          variant="gradient"
                          color="success"
                          fullWidth
                          size="lg"
                        >Sign in</argon-button>
                      </div>
                    </form>
                  </div>
                  <div class="px-1 pt-0 text-center card-footer px-lg-2">
                    <p class="mx-auto mb-4 text-sm">
                      Don't have an account?
                      <router-link
                        :to="{ name: 'Register' }"
                        class="text-success text-gradient font-weight-bold"
                      >Sign up</router-link>
                    </p>
                    <p class="mx-auto mb-4 text-sm">
                      <router-link
                        :to="{ name: 'Forgot Password' }"
                        class="text-dark text-gradient font-weight-bold"
                      >Forgot Password?</router-link>
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
import Navbar from "@/examples/PageLayout/Navbar.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import formMixin from "../../mixins/form-mixin.js"
import ValidationError from "../../components/ValidationError.vue";
import showSwal from "../../mixins/showSwal.js";
const body = document.getElementsByTagName("body")[0];

export default {
  name: "Login",
  components: {
    Navbar,
    ArgonInput,
    ArgonSwitch,
    ArgonButton,
    ValidationError
  },
  mixins: [formMixin, showSwal],
  data() {
    return {
        user: {
            email: 'admin@jsonapi.com',
            password: 'secret'
        },
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
    async handleLogin() {
      try{
        this.resetApiValidation();
        await this.$store.dispatch("auth/login", this.user);
        this.$router.push({name: "Dashboard"});
      }
      catch(error)
      {
        this.setApiValidation(error.response.data.errors);
        this.showSwal({
          type:"error",
          message: "Invalid credentials!"
        });
      }
    },
  }
};
</script>
  