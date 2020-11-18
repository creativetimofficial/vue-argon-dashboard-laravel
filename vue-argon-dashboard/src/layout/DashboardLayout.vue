<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
    >
      <template slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'ni ni-tv-2 text-primary',
            path: '/dashboard',
          }"
        />

        <sidebar-item
          opened
          :link="{
            name: 'Examples (API)',
            icon: 'ct-image-icon',
          }"
        >
          <sidebar-item
            :link="{ name: 'User Profile', path: '/examples/user-profile' }"
          />
          <sidebar-item
            :link="{
              name: 'User Management',
              path: '/examples/user-management/list-users',
            }"
          />
        </sidebar-item>

        <sidebar-item
          :link="{
            name: 'Icons',
            icon: 'ni ni-planet text-blue',
            path: '/icons',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Maps',
            icon: 'ni ni-pin-3 text-orange',
            path: '/maps',
          }"
        />
        <sidebar-item
          :link="{
            name: 'User Profile',
            icon: 'ni ni-single-02 text-yellow',
            path: '/profile',
          }"
        />
        <sidebar-item
          :link="{
            name: 'Tables',
            icon: 'ni ni-bullet-list-67 text-red',
            path: '/tables',
          }"
        />

        <a
          href="https://www.creative-tim.com/product/vue-argon-dashboard-pro-laravel"
          target="_blank"
          class="btn btn-sm btn-danger btn-icon ml-sm-3 d-none d-md-block mb-2 mt-1"
          ><span class="btn-inner--icon"
            ><i class="fas fa-download mr-2"></i
          ></span>
          <span class="nav-link-inner--text">Upgrade to PRO</span></a
        >

        <a
          href="https://vue-argon-dashboard-laravel.creative-tim.com/documentation/"
          target="_blank"
          class="btn btn-sm btn-neutral btn-icon ml-sm-3 d-none d-md-block mb-2"
          ><span class="btn-inner--icon"
            ><i class="fas fa-file-alt mr-2"></i
          ></span>
          <span class="nav-link-inner--text">Documentation</span></a
        >

        <a
          href="https://www.creative-tim.com/product/vue-argon-dashboard-laravel"
          target="_blank"
          class="btn btn-sm btn-info btn-icon ml-sm-3 d-none d-md-block mb-2"
          ><span class="btn-inner--icon"><i class="fas fa-gift mr-2"></i></span>
          <span class="nav-link-inner--text">Download now</span></a
        >

        <a
          href="https://github.com/creativetimofficial/vue-argon-dashboard-laravel"
          target="_blank"
          class="btn btn-sm btn-dark btn-icon ml-sm-3 d-none d-md-block mr-2"
          ><span class="btn-inner--icon"
            ><i class="fab fa-github mr-2"></i
          ></span>
          <span class="nav-link-inner--text">Star us on Github</span></a
        >
      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
      </div>
    </div>
  </div>
</template>
<script>
import DashboardNavbar from "./DashboardNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    DashboardNavbar,
    ContentFooter,
    FadeTransition,
  },
  data() {
    return {
      sidebarBackground: "vue", //vue|blue|orange|green|red|primary
    };
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
<style lang="scss">
</style>
