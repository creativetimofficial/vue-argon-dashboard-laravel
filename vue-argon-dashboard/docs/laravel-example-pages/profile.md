# Profile edit

You have the option to edit the current logged in user's profile information (name, email, profile picture) and password. To access this page, just click the "**Examples/Profile**" link in the left sidebar or add **/examples/user-profile** in the URL.

The `src\views\Examples\UserProfile` is the folder with Vue components that handle the update of the user information and password.

## Edit profile component

```
<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>

    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-6 order-xl-1">
          <div>
            <user-edit-card :user="user" />
          </div>
          <div class="mt-5">
            <user-password-card :user="user" />
          </div>
        </div>
        <div class="col-xl-6 order-xl-2">
          <user-card />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UserEditCard from "@/views/Examples/UserProfile/UserEditCard.vue";
import UserPasswordCard from "@/views/Examples/UserProfile/UserPasswordCard.vue";
import UserCard from "@/views/Examples/UserProfile/UserCard.vue";

export default {
  layout: "DashboardLayout",

  components: {
    UserEditCard,
    UserPasswordCard,
    UserCard,
  },

  data() {
    return {
      user: {
        type: "profile",
        name: null,
        email: null,
        profile_image: null,
      },
    };
  },
  created() {
    this.getProfile();
  },

  methods: {
    async getProfile() {
      await this.$store.dispatch("profile/me");
      this.user = await { ...this.$store.getters["profile/me"] };
    },
  },
};
</script>
```

## Edit password component

```
<template>
  <div class="card">
    <div class="card-header">
      <h1>Change Password</h1>
    </div>
    <div class="card-body">
      <form ref="password_form" @submit.prevent="handleChangePassword">
        <base-input
          v-model="password"
          type="password"
          name="new_password"
          autocomplete="on"
          class="input-group-alternative"
          addon-left-icon="ni ni-lock-circle-open"
          placeholder="New Password"
        />
        <validation-error :errors="apiValidationErrors.password" />

        <base-input
          v-model="password_confirmation"
          type="password"
          name="confirm_password"
          autocomplete="on"
          class="input-group-alternative"
          addon-left-icon="ni ni-lock-circle-open"
          placeholder="Confirm Password"
        />
        <validation-error :errors="apiValidationErrors.password_confirmation" />
        <div class="my-4">
          <base-button
            type="button"
            class="btn btn-sm btn-primary"
            native-type="submit"
          >
            Change Password
          </base-button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import formMixin from "@/mixins/form-mixin";
import ValidationError from "@/components/ValidationError.vue";

export default {
  name: "UserPasswordCard",

  components: {
    BaseInput,
    BaseButton,
    ValidationError,
  },

  mixins: [formMixin],

  props: {
    user: Object,
  },

  data() {
    return {
      password: null,
      password_confirmation: null,
    };
  },

  methods: {
    async handleChangePassword() {
      if (["1", "2", "3"].includes(this.user.id)) {
        await this.$notify({
          type: "danger",
          message: "You are not allowed not change data of default users.",
        });
        return;
      }
      this.user.password = this.password;
      this.user.password_confirmation = this.password_confirmation;

      try {
        await this.$store.dispatch("users/update", this.user);
        this.$refs["password_form"].reset();

        this.resetApiValidation();
        this.$notify({
          type: "success",
          message: "Password changed successfully.",
        });
      } catch (error) {
        this.$notify({
          type: "danger",
          message: "Oops, something went wrong!",
        });
        this.setApiValidation(error.response.data.errors);
      }
    },
  },
};
</script>
```
