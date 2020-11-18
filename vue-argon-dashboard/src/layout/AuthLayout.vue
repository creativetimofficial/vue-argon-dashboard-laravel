<template>
  <div class="main-content bg-default">
    <!-- Navbar -->
    <base-nav
      class="navbar-top navbar-horizontal navbar-dark"
      containerClasses="px-4 container"
      expand
    >
      <router-link slot="brand" class="navbar-brand" to="/">
        <img src="/img/brand/white.png" />
      </router-link>

      <template v-slot="{ closeMenu }">
        <!-- Collapse header -->
        <div class="navbar-collapse-header d-md-none">
          <div class="row">
            <div class="col-6 collapse-brand">
              <router-link to="/">
                <img src="/img/brand/green.png" />
              </router-link>
            </div>
            <div class="col-6 collapse-close">
              <button
                type="button"
                @click="closeMenu"
                class="navbar-toggler"
                aria-label="Toggle sidenav"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <!-- Navbar items -->
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link nav-link-icon" to="/">
              <span class="nav-link-inner--text">Dashboard</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link nav-link-icon" to="/login">
              <span class="nav-link-inner--text">Login</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link nav-link-icon" to="/register">
              <span class="nav-link-inner--text">Register</span>
            </router-link>
          </li>
        </ul>
        <hr class="d-lg-none" />
        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://www.facebook.com/creativetim"
              target="_blank"
              data-toggle="tooltip"
              data-original-title="Like us on Facebook"
            >
              <i class="fab fa-facebook-square"></i>
              <span class="nav-link-inner--text d-lg-none">Facebook</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://www.instagram.com/creativetimofficial"
              target="_blank"
              data-toggle="tooltip"
              data-original-title="Follow us on Instagram"
            >
              <i class="fab fa-instagram"></i>
              <span class="nav-link-inner--text d-lg-none">Instagram</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://twitter.com/creativetim"
              target="_blank"
              data-toggle="tooltip"
              data-original-title="Follow us on Twitter"
            >
              <i class="fab fa-twitter-square"></i>
              <span class="nav-link-inner--text d-lg-none">Twitter</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://github.com/creativetimofficial/ct-vue-argon-dashboard-pro-laravel"
              target="_blank"
              data-toggle="tooltip"
              data-original-title="Star us on Github"
            >
              <i class="fab fa-github"></i>
              <span class="nav-link-inner--text d-lg-none">Github</span>
            </a>
          </li>
          <li class="nav-item d-none d-lg-block ml-lg-4">
            <a
              href="https://www.creative-tim.com/product/vue-argon-dashboard-laravel"
              target="_blank"
              class="btn btn-neutral btn-icon"
            >
              <span class="btn-inner--icon">
                <i class="fas fa-shopping-cart mr-2"></i>
              </span>
              <span class="nav-link-inner--text">DOWNLOAD NOW</span>
            </a>
          </li>
        </ul>
      </template>
    </base-nav>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <div class="container">
        <div class="header-body text-center mb-4">
          <div class="text-center" style="margin-bottom: 5px">
            <div v-if="isLogin">
              <h1 class="text-white">
                Log in to Vue Argon Dashboard Laravel Live Preview
              </h1>
              <p class="text-lead text-white">
                Log in to see how you can go from frontend to fullstack in an
                instant with an API-based Laravel backend.
              </p>
              <div class="text-white">
                <h3 class="text-white">
                  <strong>You can log in with:</strong>
                </h3>
                <div>
                  Username <b>admin@jsonapi.com</b> Password <b>secret</b>
                </div>
              </div>
            </div>
            <div v-if="isRegister">
              <div class="row justify-content-center">
                <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                  <h1 class="text-white">Create an account</h1>
                  <p class="text-lead text-white">
                    Use these awesome forms to login or create new account in
                    your project for free.
                  </p>
                </div>
              </div>
            </div>
            <div v-if="isPassword">
              <div class="row justify-content-center">
                <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                  <p class="pb-0"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            class="fill-default"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <div class="container mt--8 pb-5">
      <slide-y-up-transition mode="out-in" origin="center top">
        <router-view></router-view>
      </slide-y-up-transition>
    </div>
    <footer class="py-5" id="footer-main">
      <div class="container">
        <div class="row align-items-center justify-content-xl-between">
          <div class="col-xl-6">
            <ul class="nav nav-footer">
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com"
                  class="nav-link"
                  target="_blank"
                  rel="noopener"
                  >CREATIVE TIM</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://www.updivision.com"
                  class="nav-link"
                  target="_blank"
                  rel="noopener"
                  >UPDIVISION</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com/presentation"
                  class="nav-link"
                  target="_blank"
                  rel="noopener"
                  >ABOUT US</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="http://blog.creative-tim.com"
                  class="nav-link"
                  target="_blank"
                  rel="noopener"
                  >BLOG</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com/license"
                  class="nav-link"
                  target="_blank"
                  rel="noopener"
                  >LICENSES</a
                >
              </li>
            </ul>
          </div>
          <div class="col-xl-6 pr-1">
            <div class="copyright text-center text-lg-right text-muted">
              © {{ year }}, made with <i class="fa fa-heart heart"></i> by<a
                href="https://www.creative-tim.com"
                class="font-weight-bold ml-1"
                target="_blank"
                rel="noopener"
                >Creative Tim</a
              >
              and
              <a
                href="https://www.updivision.com"
                class="font-weight-bold ml-1"
                target="_blank"
                rel="noopener"
                >UPDIVISION</a
              >
              for a better web.
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { SlideYUpTransition } from "vue2-transitions";

export default {
  name: "auth-layout",
  components: {
    SlideYUpTransition,
  },
  data() {
    return {
      year: new Date().getFullYear(),
      showMenu: false,
    };
  },
  computed: {
    isLogin() {
      return this.$route.name === "login";
    },
    isRegister() {
      return this.$route.name === "register";
    },
    isPassword() {
      return this.$route.name === "PasswordReset";
    },
  },
};
</script>
<style>
</style>
