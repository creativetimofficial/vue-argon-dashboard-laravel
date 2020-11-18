<template>
  <base-nav
    class="navbar-top navbar-dark"
    id="navbar-main"
    :show-toggle-button="false"
    expand
  >
    <form
      class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto"
    >
      <div class="form-group mb-0">
        <base-input
          placeholder="Search"
          class="input-group-alternative"
          alternative=""
          addon-right-icon="fas fa-search"
        >
        </base-input>
      </div>
    </form>
    <ul class="navbar-nav align-items-center ml-auto ml-md-0">
      <base-dropdown
        menu-on-right
        class="nav-item"
        tag="li"
        title-tag="a"
        menu-classes="dropdown-menu dropdown-menu-right py-0 overflow-hidden"
      >
        <a href="#" slot="title" class="nav-link pr-0" @click.prevent>
          <div class="media align-items-center">
            <span
              class="avatar avatar-sm rounded-circle avatar-image"
              :style="{
                'background-image': `url('${profileImage}')`,
              }"
            >
            </span>
            <div class="media-body ml-2 d-none d-lg-block">
              <span class="mb-0 text-sm font-weight-bold">{{ title }}</span>
            </div>
          </div>
        </a>

        <template>
          <div class="dropdown-header noti-title">
            <h6 class="text-overflow m-0">Welcome!</h6>
          </div>
          <a href="/examples/user-profile" class="dropdown-item">
            <i class="ni ni-single-02"></i>
            <span>My profile</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="" @click.prevent="logout()" to="" class="dropdown-item">
            <i class="ni ni-user-run"></i>
            <span>Logout</span>
          </a>
        </template>
      </base-dropdown>
    </ul>
  </base-nav>
</template>
<script>
export default {
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchQuery: "",
      title: "Profile",
      avatar: null,
    };
  },
  async created() {
    this.$store.watch(
      () => this.$store.getters["profile/me"],
      (me) => {
        this.title = me.name;
        this.avatar = me.profile_image;
      }
    );
    await this.$store.dispatch("profile/me");
  },
  computed: {
    profileImage() {
      return this.avatar ? this.avatar : "/img/placeholder.jpg";
    },
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    async logout() {
      try {
        this.$store.dispatch("logout");
      } catch (error) {
        this.$notify({
          type: "danger",
          message: "Oops, something went wrong!",
        });
      }
    },
  },
};
</script>
