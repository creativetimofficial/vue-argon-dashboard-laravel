<template>
  <div class="card">
    <div class="card-header">
      <h1>Edit Profile</h1>
    </div>
    <div class="card-body">
      <form ref="profile_form" @submit.prevent="handleProfileUpdate">
        <label class="form-control-label">Name</label>
        <base-input
          alternative=""
          addon-left-icon="ni ni-single-02"
          placeholder="Your name"
          v-model="user.name"
          class="input-group-alternative"
        />
        <validation-error :errors="apiValidationErrors.name" />

        <label class="form-control-label">Email</label>
        <base-input
          addon-left-icon="ni ni-email-83"
          placeholder="Email"
          v-model="user.email"
          class="input-group-alternative"
        />
        <validation-error :errors="apiValidationErrors.email" />
        <div class="my-4">
          <base-button
            type="button"
            class="btn btn-sm btn-primary"
            native-type="submit"
          >
            Submit
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
  name: "UserEditCard",

  components: {
    BaseInput,
    BaseButton,
    ValidationError,
  },

  mixins: [formMixin],

  props: {
    user: Object,
  },

  methods: {
    async handleProfileUpdate() {
      if (["1"].includes(this.user.id)) {
        await this.$notify({
          type: "danger",
          message: "You are not allowed not change data of default users.",
        });
        return;
      }
      try {
        await this.$store.dispatch("profile/update", this.user);

        this.resetApiValidation();
        this.$notify({
          type: "success",
          message: "Profile updated successfully.",
        });

        await this.$store.getters["profile/me"];
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
