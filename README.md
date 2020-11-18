# [Vue Argon Dashboard Laravel](https://vue-argon-dashboard-laravel.creative-tim.com/?ref=vadl-readme) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/home?status=Vue%20Argon%20Dashboard%20Laravel%E2%9D%A4%EF%B8%8F%0Ahttps%3A//vue-argon-dashboard-laravel.creative-tim.com/%20%23%vue%20%23%argon%20%23design%20%23dashboard%20%23laravel%20via%20%40CreativeTim)

![version](https://img.shields.io/badge/version-1.0.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/vue-argon-dashboard-laravel.svg?maxAge=2592000)](https://github.com/creativetimofficial/vue-argon-dashboard-laravel/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/vue-argon-dashboard-laravel/vue-argon-dashboard-laravel.svg?maxAge=2592000)](https://github.com/creativetimofficial/vue-argon-dashboard-laravel/issues?q=is%3Aissue+is%3Aclosed)

_Frontend version_: Argon Dashboard v1.2.0. More info at https://www.creative-tim.com/product/argon-dashboard-pro

_Vue version_: Vue Argon Dashboard v1.2.2. More info at https://www.creative-tim.com/product/vue-argon-dashboard

![Product Image](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-argon-dashboard-laravel/intro.gif)

What if your frontend came not only with reusable components, but also with a reusable backend? API-driven development is more than just a buzzword and we partnered with [UPDIVISION](https://updivision.com) to prove it. Build awesome-looking apps with a flexible architecture across a variety of devices and operating systems with Vue Argon Dashboard Laravel.

# Download

For the free version of the project you can either

- download the .zip file from the Creative Tim site and extract it or
- make a clone from the Github repository

You will get two project folders: one for the Laravel API project and one for the Vue frontend.

# Laravel API Setup

## Introduction

JSON:API is a specification for how a client should request that resources be fetched or modified, and how a server should respond to those requests. It is designed to minimize both the number of requests and the amount of data transmitted between clients and servers. This efficiency is achieved without compromising readability, flexibility, or discoverability.

[Click here to go to the JSON:API docs](https://explore.postman.com/api/6357/laravel-jsonapi)

## Prerequisites

The Laravel JSON:API backend project requires a working Apache/Nginx local environment with PHP, Composer and MySQL.

The Laravel JSON:API frontend project requires a working local environment with NodeJS version 8.9 or above (8.11.0+ recommended), npm, VueCLI.

If you don't already have a local development environment, use one of the following links:

- Windows: [How to install WAMP on Windows](https://updivision.com/blog/post/beginner-s-guide-to-setting-up-your-local-development-environment-on-windows)
- Linux: [How to install LAMP on Linux](https://howtoubuntu.org/how-to-install-lamp-on-ubuntu)
- Mac: [How to install MAMP on MAC](https://wpshout.com/quick-guides/how-to-install-mamp-on-your-mac/)
- Install Composer: [https://getcomposer.org/doc/00-intro.md](https://getcomposer.org/doc/00-intro.md)

Install Composer: https://getcomposer.org/doc/00-intro.md

Install Node: https://nodejs.org/ (version 8.11.0+ recommended)

Install NPM: https://www.npmjs.com/get-npm

Install VueCLI: https://cli.vuejs.org/guide/installation.html

## Laravel JSON:API Project Installation

1. Navigate in your Laravel API project folder: `cd your-laravel-json-api-project`
2. Install project dependencies: `composer install`
3. Create a new .env file: `cp .env.example .env`
4. Add your own database credentials in the .env file in DB_DATABASE, DB_USERNAME, DB_PASSWORD
5. Create users table: `php artisan migrate --seed`
6. Generate application key: `php artisan key:generate`
7. Install Laravel Passport: `php artisan passport:install`
8. Add your own mailtrap.io credentials in MAIL_USERNAME and MAIL_PASSWORD in the .env file

## Vue Argon Dashboard Project Installation

1. Navigate to your Vue Dashboard project folder: `cd your-vue-argon-dashbord-project`
2. Install project dependencies: `npm install`
3. Create a new .env file: `cp .env.example .env`
4. `VUE_APP_APP_BASE_URL` should contain the URL of your Vue Argon Dashboard Project (eg. http://localhost:8080/)
5. `VUE_APP_API_BASE_URL` should contain the URL of your Laravel JSON:API Project. (eg. http://localhost:3000/api/v1)
6. Run `npm run dev` to start the application in a local development environment or `npm run build` to build release distributables.

## Usage

Register a user or login using admin@jsonapi.com and secret and start testing the theme.

Besides the dashboard and the auth pages this theme also has an edit profile page. All the necessary files are installed out of the box and all the needed routes are added to `src\router.js`. Keep in mind that all the features can be viewed once you log in using the credentials provided above or by registering your own user.

### Dashboard

You can access the dashboard either by using the "**Dashboards/Dashboard**" link in the left sidebar or by adding **/dashboard** in the URL.

### Login

The login functionality is fully implemented in our theme helping you to start your project in no time. To login into dashboard you just have to add **/login** in the URL and fill the login form with the credentials (user: **admin@jsonapi.com** and password: **secret**).

The `src\views\Login.vue` is the Vue component which handles the login functinality. You can easily adapt it to your needs.

It uses the auth store located in `src\store\modules\auth.js`.

#### Login card

```
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
```

### Register

The register functionality is fully implemented in our theme helping you to start your project in no time. To register a new user you just have to add **/register** in the URL or click on register link from login page and fill the register form with user details.

The `src\views\Register.vue` is the Vue component which handles the login functinality. You can easily extend it to your needs.

It uses the auth store located in `src\store\modules\auth.js`.

#### Register card

```
<div class="row justify-content-center">
  <div class="col-lg-6 col-md-8">
    <div class="card bg-secondary shadow border-0">
      <div class="card-header bg-transparent pb-5">
        <div class="text-muted text-center mt-2 mb-4">
          <small>Sign up with</small>
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
          <small>Or sign up with credentials</small>
        </div>
        <form role="form" @submit.prevent="handleSubmit()">
          <base-input
            alternative
            class="input-group-alternative mb-3"
            placeholder="Name"
            addon-left-icon="ni ni-hat-3"
            v-model="name"
          >
          </base-input>
          <validation-error :errors="apiValidationErrors.name" />

          <base-input
            alternative
            class="input-group-alternative mb-3"
            placeholder="Email"
            addon-left-icon="ni ni-email-83"
            v-model="email"
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
          >
          </base-input>
          <password
            class="mb-3"
            v-model="password"
            :strength-meter-only="true"
            @score="showScore"
            :showStrengthMeter="false"
          />
          <validation-error :errors="apiValidationErrors.password" />

          <base-input
            alternative
            class="input-group-alternative"
            placeholder="Confirm Password"
            type="password"
            addon-left-icon="ni ni-lock-circle-open"
            v-model="password_confirmation"
          >
          </base-input>
          <validation-error
            :errors="apiValidationErrors.password_confirmation"
          />

          <div class="text-muted font-italic">
            <small
              >password strength:
              <template v-if="scors === 0">
                <span class="text-danger font-weight-700"> very weak </span>
              </template>

              <template v-if="scors === 1">
                <span class="text-danger font-weight-700"> weak </span>
              </template>

              <template v-if="scors === 2">
                <span class="text-warning font-weight-700"> medium </span>
              </template>

              <template v-if="scors === 3">
                <span class="text-success font-weight-700"> strong </span>
              </template>

              <template v-if="scors === 4">
                <span class="text-success font-weight-700">
                  very strong
                </span>
              </template>
            </small>
          </div>

          <div class="row my-4">
            <div class="col-12">
              <base-input
                :rules="{ required: { allowFalse: false } }"
                name="Privacy"
                Policy
              >
                <base-checkbox v-model="boolean">
                  <span class="text-muted"
                    >I agree with the
                    <a href="#!">Terms and conditions</a></span
                  >
                </base-checkbox>
              </base-input>
            </div>
          </div>
          <div class="text-center">
            <base-button type="primary" native-type="submit" class="my-4"
              >Create account</base-button
            >
          </div>
        </form>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-6">
        <a href="/password/reset" class="text-light">
          <small>Forgot password?</small>
        </a>
      </div>
      <div class="col-6 text-right">
        <router-link to="/login" class="text-light">
          <small>Login into your account</small>
        </router-link>
      </div>
    </div>
  </div>
</div>
```

### Profile edit

You have the option to edit the current logged in user's profile information (name, email, profile picture) and password. To access this page, just click the "**Examples/Profile**" link in the left sidebar or add **/examples/user-profile** in the URL.

The `src\views\Examples\UserProfile` is the folder with Vue components that handle the update of the user information and password.

#### Edit profile component

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

#### Edit password component

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

## Table of Contents

- [Versions](#versions)
- [Demo](#demo)
- [Documentation](#documentation)
- [File Structure](#file-structure)
- [Browser Support](#browser-support)
- [Resources](#resources)
- [Reporting Issues](#reporting-issues)
- [Licensing](#licensing)
- [Useful Links](#useful-links)

## Versions

[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/html-logo.jpg" height="80" />](#)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/laravel_logo.png" height="80" />](#)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/vue.jpg" height="80" />](#)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/json-api.png" height="75" />](#)

| HTML                                                                                                                                                                                | Laravel                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Argon Dashboard HTML](https://s3.amazonaws.com/creativetim_bucket/products/96/thumb/opt_ad_thumbnail.jpg)](https://www.creative-tim.com/product/argon-dashboard?ref=vadl-readme) | [![Argon Dashboard Laravel](https://s3.amazonaws.com/creativetim_bucket/products/140/thumb/opt_ad_laravel_thumbnail.jpg)](https://www.creative-tim.com/product/argon-dashboard-laravel?ref=vadl-readme) |

| Vue                                                                                                                                                                                               | Vue & Laravel                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Vue Argon Dashboard](<https://s3.amazonaws.com/creativetim_bucket/products/156/thumb/opt_ad_vue_thumbnail_(2).jpg>)](https://www.creative-tim.com/product/vue-argon-dashboard?ref=vadl-readme) | [![Vue Argon Dashboard Laravel](https://s3.amazonaws.com/creativetim_bucket/products/352/thumb/opt_ad_vue_laravel_thumbnail.jpg)](https://www.creative-tim.com/product/vue-argon-dashboard-laravel?ref=vadl-readme) |

## Demo

| Register                                                                                                                                                                                                          | Login                                                                                                                                                                                                    | Dashboard                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Register](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-argon-dashboard-laravel/register.png)](https://vue-argon-dashboard-laravel.creative-tim.com/register?ref=vadl-readme) | [![Login](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-argon-dashboard-laravel/login.png)](https://vue-argon-dashboard-laravel.creative-tim.com/login?ref=vadl-readme) | [![Dashboard](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-argon-dashboard-laravel/dashboard.png)](https://vue-argon-dashboard-laravel.creative-tim.com/?ref=vadl-readme) |

| Profile Page                                                                                                                                                                                                                      | Users Page                                                                                                                                                                                                                                  | Tables Page                                                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Profile Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-argon-dashboard-laravel/profile.png)](https://vue-argon-dashboard-laravel.creative-tim.com/examples/user-profile?ref=vadl-readme) | [![Users Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-argon-dashboard-laravel/users.png)](https://vue-argon-dashboard-laravel.creative-tim.com/examples/user-management/list-users?ref=vadl-readme) | [![Tables Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-argon-dashboard-laravel/tables.png)](https://vue-argon-dashboard-laravel.creative-tim.com/tables?ref=vadl-readme) |

[View More](https://vue-argon-dashboard-laravel.creative-tim.com/?ref=vadl-readme)

## Documentation

The documentation for the Vue Argon Dashboard Laravel is hosted at our [website](https://vue-argon-dashboard-laravel.creative-tim.com/documentation?ref=vadl-readme).

## File Structure

```
├───Vue Argon Dashboard
│   App.vue
│   main.js
│   registerServiceWorker.js
│   router.js
│
├───assets
│   │   logo.png
│   │
│   ├───scss
│   │   │   argon.scss
│   │   │
│   │   ├───core
│   │   └───custom
│   └───vendor
│       └───nucleo
│           ├───css
│           │       nucleo-svg.css
│           │       nucleo.css
│           │
│           └───fonts
│                   nucleo-icons.eot
│                   nucleo-icons.svg
│                   nucleo-icons.ttf
│                   nucleo-icons.woff
│                   nucleo-icons.woff2
│
├───components
│   │   Badge.vue
│   │   BaseAlert.vue
│   │   BaseButton.vue
│   │   BaseCheckbox.vue
│   │   BaseDropdown.vue
│   │   BaseHeader.vue
│   │   BaseInput.vue
│   │   BaseNav.vue
│   │   BasePagination.vue
│   │   BaseProgress.vue
│   │   BaseRadio.vue
│   │   BaseSlider.vue
│   │   BaseSwitch.vue
│   │   BaseTable.vue
│   │   Card.vue
│   │   CloseButton.vue
│   │   Modal.vue
│   │   NavbarToggleButton.vue
│   │   StatsCard.vue
│   │   stringUtils.js
│   │   ValidationError.vue
│   │
│   ├───Charts
│   │       BarChart.js
│   │       config.js
│   │       DoughnutChart.js
│   │       globalOptionsMixin.js
│   │       LineChart.js
│   │       optionHelpers.js
│   │       PieChart.js
│   │
│   ├───NotificationPlugin
│   │       index.js
│   │       Notification.vue
│   │       Notifications.vue
│   │
│   ├───SidebarPlugin
│   │       index.js
│   │       SideBar.vue
│   │       SidebarItem.vue
│   │
│   └───Tabs
│           PillsLayout.vue
│           Tab.vue
│           TabPane.vue
│           Tabs.vue
│           TabsLayout.vue
│
├───directives
│       click-ouside.js
│
├───layout
│       AuthLayout.vue
│       Content.vue
│       ContentFooter.vue
│       DashboardLayout.vue
│       DashboardNavbar.vue
│
├───middleware
│       auth.js
│       guest.js
│
├───mixins
│       form-mixin.js
│
├───plugins
│       argon-dashboard.js
│       globalComponents.js
│       globalDirectives.js
│
├───store
│   │   index.js
│   │
│   ├───modules
│   │       auth.js
│   │       profile-module.js
│   │
│   └───services
│           profile-service.js
│
└───views
    │   Dashboard.vue
    │   Icons.vue
    │   Login.vue
    │   Maps.vue
    │   Register.vue
    │   Tables.vue
    │   UserProfile.vue
    │
    ├───Dashboard
    │       PageVisitsTable.vue
    │       SocialTrafficTable.vue
    │
    ├───Examples
    │   │   UserProfile.vue
    │   │
    │   ├───UserManagement
    │   │       ListUserPage.vue
    │   │
    │   └───UserProfile
    │           UserCard.vue
    │           UserEditCard.vue
    │           UserPasswordCard.vue
    │
    ├───Password
    │       Reset.vue
    │
    └───Tables
            ProjectsTable.vue
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">

## Resources

- Demo: <https://vue-argon-dashboard-laravel.creative-tim.com/?ref=vadl-readme>
- Download Page: <https://www.creative-tim.com/product/vue-argon-dashboard-laravel?ref=vadl-readme>
- Documentation: <https://vue-argon-dashboard-laravel.creative-tim.com/documentation?ref=vadl-readme>
- License Agreement: <https://www.creative-tim.com/license>
- Support: <https://www.creative-tim.com/contact-us>
- Issues: [Github Issues Page](https://github.com/creativetimofficial/vue-argon-dashboard-laravel/issues)
- **Dashboards:**

| HTML                                                                                                                                                                                | Laravel                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Argon Dashboard HTML](https://s3.amazonaws.com/creativetim_bucket/products/96/thumb/opt_ad_thumbnail.jpg)](https://www.creative-tim.com/product/argon-dashboard?ref=vadl-readme) | [![Argon Dashboard Laravel](https://s3.amazonaws.com/creativetim_bucket/products/140/thumb/opt_ad_laravel_thumbnail.jpg)](https://www.creative-tim.com/product/argon-dashboard-laravel?ref=vadl-readme) |

| Vue                                                                                                                                                                                               | Vue & Laravel                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Vue Argon Dashboard](<https://s3.amazonaws.com/creativetim_bucket/products/156/thumb/opt_ad_vue_thumbnail_(2).jpg>)](https://www.creative-tim.com/product/vue-argon-dashboard?ref=vadl-readme) | [![Vue Argon Dashboard Laravel](https://s3.amazonaws.com/creativetim_bucket/products/352/thumb/opt_ad_vue_laravel_thumbnail.jpg)](https://www.creative-tim.com/product/vue-argon-dashboard-laravel?ref=vadl-readme) |

## Change log

Please see the [changelog](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [Creative Tim](https://creative-tim.com/?ref=vadl-readme)
- [UPDIVISION](https://updivision.com)

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Vue Argon Dashboard Laravel. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Vue Argon Dashboard Laravel. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/?ref=vadl-readme).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

- Copyright 2019 Creative Tim (https://www.creative-tim.com/?ref=vadl-readme)
- [Creative Tim License](https://www.creative-tim.com/license).

## Useful Links

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)
- [Affiliate Program](https://www.creative-tim.com/affiliates/new) (earn money)
- [Blog Creative Tim](http://blog.creative-tim.com/)
- [Free Products](https://www.creative-tim.com/bootstrap-themes/free) from Creative Tim
- [Premium Products](https://www.creative-tim.com/bootstrap-themes/premium?ref=vadl-readme) from Creative Tim
- [React Products](https://www.creative-tim.com/bootstrap-themes/react-themes?ref=vadl-readme) from Creative Tim
- [Angular Products](https://www.creative-tim.com/bootstrap-themes/angular-themes?ref=vadl-readme) from Creative Tim
- [VueJS Products](https://www.creative-tim.com/bootstrap-themes/vuejs-themes?ref=vadl-readme) from Creative Tim
- [More products](https://www.creative-tim.com/bootstrap-themes?ref=vadl-readme) from Creative Tim
- Check our Bundles [here](https://www.creative-tim.com/bundles??ref=vadl-readme)

## Social Media

### Creative Tim:

Twitter: <https://twitter.com/CreativeTim?ref=vadl-readme>

Facebook: <https://www.facebook.com/CreativeTim?ref=vadl-readme>

Dribbble: <https://dribbble.com/creativetim?ref=vadl-readme>

Instagram: <https://www.instagram.com/CreativeTimOfficial?ref=vadl-readme>

### Updivision:

Twitter: <https://twitter.com/updivision?ref=vadl-readme>

Facebook: <https://www.facebook.com/updivision?ref=vadl-readme>

Linkedin: <https://www.linkedin.com/company/updivision?ref=vadl-readme>

Updivision Blog: <https://updivision.com/blog/?ref=vadl-readme>

## Credits

- [Creative Tim](https://creative-tim.com/?ref=vadl-readme)
- [UPDIVISION](https://updivision.com)
