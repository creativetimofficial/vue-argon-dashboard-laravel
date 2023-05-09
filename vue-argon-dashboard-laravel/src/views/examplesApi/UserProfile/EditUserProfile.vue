<template>
    <main>
      <div class="container-fluid">
        <div
          class="page-header min-height-300"
          style="
            background-image: url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
            margin-right: -24px;
            margin-left: -34%;
          "
        >
          <span class="mask bg-gradient-success opacity-6"></span>
        </div>
        <div class="card shadow-lg mt-n6">
          <div class="card-body p-3">
            <div class="row gx-4">
              <div class="col-auto">
                <div class="avatar avatar-xl position-relative">
                  <img
                    :src="profileImage()"
                    alt="Profile Image"
                    class="shadow-sm w-100 border-radius-lg"
                  />
                </div>
              </div>
              <div class="col-auto my-auto">
                <div class="h-100">
                  <h5 class="mb-1">{{user.name}}</h5>
                  <p class="mb-0 font-weight-bold text-sm">Public Relations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-4 container-fluid">
        <div class="row">
          <div class="col-md-8 mb-3">
            <form @submit.prevent="handleChangeProfile()">
              <div class="card mb-3">
                  <div class="card-header pb-0">
                    <div class="d-flex align-items-center">
                      <h5>Basic Info</h5>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="col-md-12 d-flex flex-column">
                      <div class="col-md-12 mb-3">
                        <label for="example-text-input" class="form-control-label"
                          >Name</label
                        >
                        <argon-input type="text" v-model="userToUpdate.name" class="mb-0" placeholder="Name" :value="userToUpdate.name" />
                        <validation-error :errors="apiValidationErrors.name" />
                      </div>
                      <div class="col-md-12">
                        <label for="example-text-input" class="form-control-label"
                          >Email address</label
                        >
                        <argon-input type="email" v-model="userToUpdate.email" class="mb-0" placeholder="Email" :value="userToUpdate.email" />
                        <validation-error :errors="apiValidationErrors.email" />
                      </div>
                    </div>
                    <argon-button variant="gradient" color="dark" size="sm" class="float-end mt-3 mb-0"
                        >Update Info</argon-button
                      >
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h5>Change Password</h5>
                    <div class="row">
                      <div class="col-md-12">
                        <label for="example-text-input" class="form-control-label"
                          >New password</label
                        >
                        <argon-input
                          type="password"
                          v-model="userToUpdate.password"
                          placeholder="New password"
                          :value="userToUpdate.password"
                        />
                      </div>
                      <validation-error class="mb-2" :errors="apiValidationErrors.password" />
                      <div class="col-md-12">
                        <label for="example-text-input" class="form-control-label"
                          >Confirm new password</label
                        >
                        <argon-input
                          type="password"
                          v-model="userToUpdate.password_confirmation"
                          placeholder="Confirm new password"
                          :value="userToUpdate.password_confirmation"
                        />
                      </div>
                    </div>
                    <argon-button variant="gradient" color="dark" size="sm" class="float-end mt-3 mb-0"
                        >Update Password</argon-button
                      >
                  </div>
              </div>
            </form>
          </div>
          <div class="col-md-4">
            <profile-card />
          </div>
        </div>
      </div>
    </main>
  </template>
  
<script>
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import ProfileCard from "../../components/ProfileCard.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import placeholder from "../../../assets/img/placeholder.jpg";
import formMixin from "../../../mixins/form-mixin.js";
import ValidationError from "../../../components/ValidationError.vue";
import showSwal from "../../../mixins/showSwal.js";

const body = document.getElementsByTagName("body")[0];

export default {
  name: "profile",
  data() {
    return {
      showMenu: false,
      userToUpdate: {}
    };
  },
  components: { 
    ProfileCard, 
    ArgonInput, 
    ArgonButton,
    ValidationError
  },
  mixins: [formMixin, showSwal],
  computed: {
    user() {
      return this.$store.getters["profile/me"];
    },
  },
  mounted() {
    this.$store.state.isAbsolute = true;
    setNavPills();
    setTooltip();
    this.userToUpdate = { ...this.user };
  },
  beforeMount() {
    this.$store.state.imageLayout = "profile-overview";
    this.$store.state.showNavbar = false;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = true;
    body.classList.add("profile-overview");
  },
  beforeUnmount() {
    this.$store.state.isAbsolute = false;
    this.$store.state.imageLayout = "default";
    this.$store.state.showNavbar = true;
    this.$store.state.showFooter = true;
    this.$store.state.hideConfigButton = false;
    body.classList.remove("profile-overview");
  },
  methods: {
    profileImage() {
      return this.userToUpdate.profile_image
        ? this.userToUpdate.profile_image
        : placeholder;
    },

    async handleChangeProfile() {
      try {
        if(this.$isDemo == 1 && this.userToUpdate.id <= 3) {
          this.showSwal({
                type: "error",
                message: "You are not allowed to change data of default users.",
                width: 400
            });
        }
        else{
            this.resetApiValidation();
            await this.$store.dispatch("profile/update", this.userToUpdate);
            this.showSwal({
              type: "success",
              message: "Profile updated successfully!"
            });
            await this.$store.dispatch("profile/me");
        }
      } catch (error) {
        this.setApiValidation(error.response.data.errors);
        this.showSwal({
          type: "error",
          message: "Oops, something went wrong!"
        });
      }
    },
  }
};
</script>
  