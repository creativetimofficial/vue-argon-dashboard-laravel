# [Vue Argon Dashboard 2](https://www.creative-tim.com/live/vue-argon-dashboard-laravel/?ref=readme-vad) [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&logo=twitter)](https://twitter.com/intent/tweet?text=Check%20Vue%20Argon%20Dashboard%20made%20by%20%40CreativeTim%20%26%20%40updivision%20%23dashboard%20%23bootstrap5%20%23laravel&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fvue-argon-dashboard-laravel)

![version](https://img.shields.io/badge/version-3.0.0-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/vue-argon-dashboard-laravel.svg)](https://github.com/creativetimofficial/vue-argon-dashboard-laravel/issues?q=is%3Aopen+is%3Aissue) [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/vue-argon-dashboard-laravel.svg)](https://github.com/creativetimofficial/vue-argon-dashboard-laravel/issues?q=is%3Aissue+is%3Aclosed)

_Frontend version_: Argon Dashboard v2.0.4. More info at https://www.creative-tim.com/product/argon-dashboard

_Vue version_: Vue Argon Dashboard v3.0.0. More info at https://www.creative-tim.com/product/vue-argon-dashboard

![Image](https://s3.amazonaws.com/creativetim_bucket/products/156/original/vue-argon-dashboard.jpg)

What if your frontend came not only with reusable components, but also with a reusable backend? API-driven development is more than just a buzzword and we partnered with [UPDIVISION](https://updivision.com) to prove it. Build awesome-looking apps with a flexible architecture across a variety of devices and operating systems with Vue Argon Dashboard Laravel.

Start your Development with an Innovative Admin Template for Bootstrap 5 and VueJS 3. If you like the look & feel of the hottest design trend right now, you will fall in love with this dashboard! It features a huge number of components built to fit together and look amazing.

**Fully Coded Components**<br />
Vue Argon Dashboard 2 is built with over 70 frontend individual elements, like buttons, inputs, navbars, nav tabs, cards, or alerts, giving you the freedom of choosing and combining. All components can take variations in color, which you can easily modify using SASS files and classes. You will save a lot of time going from prototyping to full-functional code because all elements are implemented.

This free Bootstrap 5 & VueJS 3 Dashboard is coming with prebuilt design blocks, so the development process is seamless,
switching from our pages to the real website is very easy to be done.

View [all components here](https://vue-argon-dashboard-laravel-docs.creative-tim.com/vue/alerts/argon-dashboard/).

If you want to get more features, go PRO with [Vue Argon 2 Dashboard PRO Laravel](https://www.creative-tim.com/product/vue-argon-dashboard-pro).

# Laravel API Setup

## Introduction

JSON:API is a specification for how a client should request that resources be fetched or modified, and how a server should respond to those requests. It is designed to minimize both the number of requests and the amount of data transmitted between clients and servers. This efficiency is achieved without compromising readability, flexibility, or discoverability.

[Click here to go to the JSON:API docs](https://explore.postman.com/api/6357/laravel-jsonapi)

## Prerequisites

The Laravel JSON:API backend project requires a working Apache/Nginx local environment with PHP, Composer and MySQL.

The Laravel JSON:API frontend project requires a working local environment with NodeJS version 8.9 or above (8.11.0+ recommended), npm, VueCLI.

If you don't already have a local development environment, use one of the following links:

- Windows: [How to install WAMP on Windows](https://updivision.com/blog/post/beginner-s-guide-to-setting-up-your-local-development-environment-on-windows)
- Linux & Mac: [How to install LAMP on Linux & Mac](https://updivision.com/blog/post/guide-what-is-lamp-and-how-to-install-it-on-ubuntu-and-macos)
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
7. Install Laravel Passport: php artisan passport:install and set in the .env file the CLIENT_ID and CLIENT_SECRET that you receive
8. Add your own mailtrap.io credentials in MAIL_USERNAME and MAIL_PASSWORD in the .env file

## Vue Argon Dashboard Project Installation

1. Navigate to your Vue Dashboard project folder: `cd your-vue-argon-dashbord-project`
2. Install project dependencies: `npm install`
3. Create a new .env file: `cp .env.example .env`
4. `VUE_APP_BASE_URL` should contain the URL of your Vue Argon Dashboard Project (eg. http://localhost:8080/)
5. `VUE_APP_API_BASE_URL` should contain the URL of your Laravel JSON:API Project. (eg. http://localhost:3000/api/v1)
6. Run `npm run dev` to start the application in a local development environment or `npm run build` to build release distributables.

## Usage

Register a user or login using admin@jsonapi.com and secret and start testing the theme.

Besides the dashboard and the auth pages this theme also has an edit profile page. All the necessary files are installed out of the box and all the needed routes are added to `src\router\index.js`. Keep in mind that all the features can be viewed once you log in using the credentials provided above or by registering your own user.

### Dashboard

You can access the dashboard either by using the "**Dashboard**" link in the left sidebar or by adding **/dashboard-default** in the URL.

# Login

The login functionality is fully implemented in our theme helping you to start your project in no time. To login into dashboard you just have to add **/login** in the URL and fill the login form with one of the credentials (user: **admin@jsonapi.com** and password: **secret**).

The `src\views\auth\Login.vue` is the Vue component which handles the login functinality. You can easily adapt it to your needs.

It uses the auth store located in `src\store\auth.module.js` and you can find the service file in `src\services\auth.service.js`.

## Login card

```
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
```

# Register

The register functionality is fully implemented in our theme helping you to start your project in no time. To register a new user you just have to add **/register** in the URL or click on register link from login page and fill the register form with user details.

The `src\views\auth\Register.vue` is the Vue component which handles the register functinality. You can easily extend it to your needs.

It uses the auth store located in `src\store\auth.module.js`and you can find the service file in `src\services\auth.service.js`.

## Register card

```
<template>
    <div class="container top-0 position-sticky z-index-sticky">
      <div class="row">
        <div class="col-12">
          <navbar isBtn="bg-gradient-light" />
        </div>
      </div>
    </div>
    <main class="main-content mt-0">
      <div
        class="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
        style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg'); background-position: top;"
      >
        <span class="mask bg-gradient-dark opacity-6"></span>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-5 text-center mx-auto">
              <h1 class="text-white mb-2 mt-5">Welcome!</h1>
              <p
                class="text-lead text-white"
              >Use these awesome forms to login or create new account in your project for free.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
          <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
            <div class="card z-index-0">
              <div class="card-header text-center pt-4">
                <h5>Register with</h5>
              </div>
              <div class="row px-xl-5 px-sm-4 px-3">
                <div class="col-3 ms-auto px-1">
                  <a class="btn btn-outline-light w-100" href="javascript:;">
                    <svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(3.000000, 3.000000)" fill-rule="nonzero">
                          <circle fill="#3C5A9A" cx="29.5091719" cy="29.4927506" r="29.4882047" />
                          <path
                            d="M39.0974944,9.05587273 L32.5651312,9.05587273 C28.6886088,9.05587273 24.3768224,10.6862851 24.3768224,16.3054653 C24.395747,18.2634019 24.3768224,20.1385313 24.3768224,22.2488655 L19.8922122,22.2488655 L19.8922122,29.3852113 L24.5156022,29.3852113 L24.5156022,49.9295284 L33.0113092,49.9295284 L33.0113092,29.2496356 L38.6187742,29.2496356 L39.1261316,22.2288395 L32.8649196,22.2288395 C32.8649196,22.2288395 32.8789377,19.1056932 32.8649196,18.1987181 C32.8649196,15.9781412 35.1755132,16.1053059 35.3144932,16.1053059 C36.4140178,16.1053059 38.5518876,16.1085101 39.1006986,16.1053059 L39.1006986,9.05587273 L39.0974944,9.05587273 L39.0974944,9.05587273 Z"
                            fill="#FFFFFF"
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
                <div class="col-3 px-1">
                  <a class="btn btn-outline-light w-100" href="javascript:;">
                    <svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g
                          transform="translate(7.000000, 0.564551)"
                          fill="#000000"
                          fill-rule="nonzero"
                        >
                          <path
                            d="M40.9233048,32.8428307 C41.0078713,42.0741676 48.9124247,45.146088 49,45.1851909 C48.9331634,45.4017274 47.7369821,49.5628653 44.835501,53.8610269 C42.3271952,57.5771105 39.7241148,61.2793611 35.6233362,61.356042 C31.5939073,61.431307 30.2982233,58.9340578 25.6914424,58.9340578 C21.0860585,58.9340578 19.6464932,61.27947 15.8321878,61.4314159 C11.8738936,61.5833617 8.85958554,57.4131833 6.33064852,53.7107148 C1.16284874,46.1373849 -2.78641926,32.3103122 2.51645059,22.9768066 C5.15080028,18.3417501 9.85858819,15.4066355 14.9684701,15.3313705 C18.8554146,15.2562145 22.5241194,17.9820905 24.9003639,17.9820905 C27.275104,17.9820905 31.733383,14.7039812 36.4203248,15.1854154 C38.3824403,15.2681959 43.8902255,15.9888223 47.4267616,21.2362369 C47.1417927,21.4153043 40.8549638,25.1251794 40.9233048,32.8428307 M33.3504628,10.1750144 C35.4519466,7.59650964 36.8663676,4.00699306 36.4804992,0.435448578 C33.4513624,0.558856931 29.7884601,2.48154382 27.6157341,5.05863265 C25.6685547,7.34076135 23.9632549,10.9934525 24.4233742,14.4943068 C27.7996959,14.7590956 31.2488715,12.7551531 33.3504628,10.1750144"
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
                <div class="col-3 me-auto px-1">
                  <a class="btn btn-outline-light w-100" href="javascript:;">
                    <svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1">
                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(3.000000, 2.000000)" fill-rule="nonzero">
                          <path
                            d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267"
                            fill="#4285F4"
                          />
                          <path
                            d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667"
                            fill="#34A853"
                          />
                          <path
                            d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782"
                            fill="#FBBC05"
                          />
                          <path
                            d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769"
                            fill="#EB4335"
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                </div>
                <div class="mt-2 position-relative text-center">
                  <p
                    class="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3"
                  >or</p>
                </div>
              </div>
              <div class="card-body">
                <form role="form" @submit.prevent="handleRegister()">
                  <argon-input
                    v-model="user.name"
                    type="text"
                    placeholder="Name"
                    aria-label="Name"
                    :value="user.name" />
                  <argon-input
                    v-model="user.email"
                    type="email"
                    class="mb-0"
                    placeholder="Email"
                    aria-label="Email"
                    :value="user.email" />
                    <div class="mb-3">
                        <validation-error id="registerValidation" :errors="apiValidationErrors.email" />
                    </div>
                  <argon-input
                    v-model="user.password"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    :value="user.password" />
                    <div class="mb-3">
                        <validation-error id="registerValidation" :errors="apiValidationErrors.password" />
                    </div>
                    <argon-input
                    v-model="user.confirm_password"
                    type="password"
                    placeholder="Confirm password"
                    aria-label="Password"
                    :value="user.confirm_password" />
                  <argon-checkbox id="flexCheckDefault" v-model="terms_conditions">
                    <label class="form-check-label" for="flexCheckDefault">
                      I agree the
                      <a
                        href="javascript:;"
                        class="text-dark font-weight-bolder"
                      >Terms and Conditions</a>
                    </label>
                  </argon-checkbox>
                  <div class="text-center">
                    <argon-button fullWidth color="dark" variant="gradient" class="my-4 mb-2" :disabled="loadingAdd">Sign up</argon-button>
                  </div>
                  <p class="text-sm mt-3 mb-0">
                    Already have an account?
                    <router-link
                    :to="{ name: 'Login' }"
                      class="text-dark font-weight-bolder"
                    >Sign in</router-link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <app-footer />
</template>
```

# Profile edit

You have the option to edit the current logged in user's profile information (name, email, profile picture) and password. To access this page, just click the "**Examples (API)/User Profile**" link in the left sidebar or add **/examples/user-profile** in the URL.

The `src\views\examplesApi\UserProfile` is the folder with Profile Vue component that handle the update of the user information and password.

The store used for profile functionality is found in `src\store\profile.module.js` and you can find the service file in `src\services\profile.service.js`.

## Edit profile page

```
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
```

**Documentation built by Developers**<br />
Each element is well presented in very complex documentation.
You can read more about the [documentation here](https://vue-argon-dashboard-laravel-docs.creative-tim.com/vue/overview/argon-dashboard/).

**Example Pages**<br />
If you want to get inspiration or just show something directly to your clients, you can jump-start your development with our pre-built example pages. Every page is spaced well, with attractive layouts and pleasing shapes. Vue Argon Dashboard 2 has everything you need to quickly set up an amazing project.

View [example pages here](https://www.creative-tim.com/live/vue-argon-dashboard-laravel).

**HELPFUL LINKS**

- View [Github Repository](https://github.com/creativetimofficial/vue-argon-dashboard-laravel)
- Check [FAQ Page](https://www.creative-tim.com/faq)

#### Special thanks

During the development of this dashboard, we have used many existing resources from awesome developers. We want to thank them for providing their tools open source:

- [Popper.js](https://popper.js.org/) - Kickass library used to manage poppers

Let us know your thoughts below. And good luck with development!

## Table of Contents

- [Versions](#versions)
- [Demo](#demo)
- [Quick Start](#quick-start)
- [Documentation](#documentation)
- [File Structure](#file-structure)
- [Browser Support](#browser-support)
- [Resources](#resources)
- [Reporting Issues](#reporting-issues)
- [Technical Support or Questions](#technical-support-or-questions)
- [Licensing](#licensing)
- [Useful Links](#useful-links)

## Versions

[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/html-logo.jpg" height="80" />](#)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/laravel_logo.png" height="80" />](#)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/vue.jpg" height="80" />](#)
[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/json-api.png" height="75" />](#)


| HTML                                                                                                                                                                                | Laravel                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Argon Dashboard HTML](https://s3.amazonaws.com/creativetim_bucket/products/96/thumb/argon-dashboard-2.jpg)](https://www.creative-tim.com/product/argon-dashboard?ref=vadl-readme) | [![Argon Dashboard Laravel](https://s3.amazonaws.com/creativetim_bucket/products/140/thumb/argon-dashboard-laravel.jpg)](https://www.creative-tim.com/product/argon-dashboard-laravel?ref=vadl-readme) |

| Vue                                                                                                                                                                                               | Vue & Laravel                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Vue Argon Dashboard](<https://s3.amazonaws.com/creativetim_bucket/products/156/thumb/vue-argon-dashboard.jpg>)](https://www.creative-tim.com/product/vue-argon-dashboard?ref=vadl-readme) | [![Vue Argon Dashboard Laravel](https://s3.amazonaws.com/creativetim_bucket/products/352/thumb/opt_ad_vue_laravel_thumbnail.jpg)](https://www.creative-tim.com/product/vue-argon-dashboard-laravel?ref=vadl-readme) |

## Demo

| Register                                                                                                                                                                                                          | Login                                                                                                                                                                                                    | Dashboard                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Register](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-argon2-dashboard-laravel/register.png)](https://vue-argon-dashboard-laravel.creative-tim.com/register?ref=vadl-readme) | [![Login](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-argon2-dashboard-laravel/login.png)](https://vue-argon-dashboard-laravel.creative-tim.com/login?ref=vadl-readme) | [![Dashboard](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-argon2-dashboard-laravel/dashboard.png)](https://vue-argon-dashboard-laravel.creative-tim.com/?ref=vadl-readme) |

| Profile Page                                                                                                                                                                                                                      | Users Page                                                                                                                                                                                                                                  | Tables Page                                                                                                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Profile Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-argon2-dashboard-laravel/profile.png)](https://vue-argon-dashboard-laravel.creative-tim.com/examples/user-profile?ref=vadl-readme) | [![Users Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-argon2-dashboard-laravel/users.png)](https://vue-argon-dashboard-laravel.creative-tim.com/examples/user-management/list-users?ref=vadl-readme) | [![Tables Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/vue-argon2-dashboard-laravel/tables.png)](https://vue-argon-dashboard-laravel.creative-tim.com/tables?ref=vadl-readme) |

[View More](https://www.creative-tim.com/live/vue-argon-dashboard-laravel/#/dashboard-default?ref=readme-vadl).

## Quick start

Quick start options:

- Download from [Creative Tim](https://www.creative-tim.com/product/vue-argon-dashboard-laravel?ref=readme-vadl).

## Terminal Commands

1. Download and Install NodeJs LTS version from [NodeJs Official Page](https://nodejs.org/en/download/).
2. Navigate to the root ./ directory of the product and run `npm install` to install our local dependencies.

## Documentation

The documentation for the Vue Argon Dashboard 2 is hosted at our [website](https://vue-argon-dashboard-laravel-docs.creative-tim.com/vue/overview/argon-dashboard/?ref=readme-vadl).

### What's included

Within the download you'll find the following directories and files:

```
vue-argon-dashboard-laravel
    ├── public
    │   ├── favicon.png
    │   └── index.html
    ├── src
    │   ├── assets
    │   │   ├── css
    │   │   ├── fonts
    │   │   ├── img
    │   │   ├── js
    │   │   └── scss
    │   ├── components
    │   │   ├── ArgonAlert.vue
    │   │   ├── ArgonAvatar.vue
    │   │   ├── ArgonBadge.vue
    │   │   ├── ArgonButton.vue
    │   │   ├── ArgonCheckbox.vue
    │   │   ├── ArgonInput.vue
    │   │   ├── ArgonPagination.vue
    │   │   ├── ArgonPaginationItem.vue
    │   │   ├── ArgonProgress.vue
    │   │   ├── ArgonRadio.vue
    │   │   ├── ArgonSnackbar.vue
    │   │   ├── ArgonSocialButton.vue
    │   │   ├── ArgonSwitch.vue
    │   │   └── ArgonTextarea.vue
    |   |   └── ValidationError.vue
    │   ├── examples
    │   │   ├── Cards
    │   │   ├── Charts
    │   │   ├── Navbars
    │   │   ├── PageLayout
    │   │   ├── Sidenav
    │   │   ├── Breadcrumbs.vue
    │   │   ├── Configurator.vue
    │   │   └── Footer.vue
    │   ├── middleware
    │   │   └── auth.js
    │   │   └── guest.js
    │   ├── mixins
    │   │   └── form-mixin.js
    │   │   └── showSwal.js
    │   ├── router
    │   ├── services
    │   │   └── auth-header.js
    │   │   └── auth.service.js
    │   │   └── profile.service.js
    │   ├── store
    │   │   └── auth.module.js
    │   │   └── index.js
    │   │   └── profile.module.js
    │   ├── views
    │   │   ├── auth
    │   │   ├── components
    │   │   ├── examplesApi
    │   │   ├── Billing.vue
    │   │   ├── Dashboard.vue
    │   │   ├── Home.vue
    │   │   ├── Profile.vue
    │   │   ├── Rtl.vue
    │   │   ├── Signin.vue
    │   │   ├── Signup.vue
    │   │   ├── Tables.vue
    │   │   └── VirtualReality.vue
    │   ├── App.vue
    │   ├── argon-dashboard.js
    │   └── main.js
    ├── .browserslistrc
    ├── .eslintrc.js
    ├── .gitignore
    ├── babel.config.js
    ├── CHANGELOG.md
    ├── ISSUE_TEMPLATE.md
    ├── LICENSE
    ├── package.json
    └── README.md
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/firefox.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/edge.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/safari.png" width="64" height="64"> <img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/opera.png" width="64" height="64">

## Resources

- [Live Preview](https://www.creative-tim.com/live/vue-argon-dashboard-laravel/#/dashboard-default?ref=readme-vadl)
- [Download Page](https://www.creative-tim.com/product/vue-argon-dashboard-laravel?ref=readme-vadl)
- Documentation is [here](https://vue-argon-dashboard-laravel-docs.creative-tim.com/vue/overview/argon-dashboard/?ref=readme-vadl)
- [License Agreement](https://www.creative-tim.com/license?ref=readme-vadl)
- [Support](https://www.creative-tim.com/contact-us?ref=readme-vadl)
- Issues: [Github Issues Page](https://github.com/creativetimofficial/vue-argon-dashboard-laravel/issues)

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Vue Argon Dashboard 2. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Vue Argon Dashboard 2. Check the CHANGELOG from your dashboard on our [website](https://www.creative-tim.com/product/vue-argon-dashboard-laravel?ref=readme-vadl).
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](https://www.creative-tim.com/contact-us?ref=readme-vadl) instead of opening an issue.

## Licensing

- Copyright 2022 [Creative Tim](https://www.creative-tim.com?ref=readme-vadl) & [UPDIVISION](https://updivision.com?ref=readme-vadl)
- Creative Tim [license](https://www.creative-tim.com/license?ref=readme-vadl)

## Useful Links

- [More products](https://www.creative-tim.com/templates?ref=readme-vadl) from Creative Tim

- [Tutorials](https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w)

- [Freebies](https://www.creative-tim.com/bootstrap-themes/free?ref=readme-vadl) from Creative Tim

- [Affiliate Program](https://www.creative-tim.com/affiliates/new?ref=readme-vadl) (earn money)

## Social Media

### Creative Tim:

Twitter: <https://twitter.com/CreativeTim>

Facebook: <https://www.facebook.com/CreativeTim>

Dribbble: <https://dribbble.com/creativetim>

Google+: <https://plus.google.com/+CreativetimPage>

Instagram: <https://instagram.com/creativetimofficial>

### Updivision:

Twitter: <https://twitter.com/updivision?ref=vadl-readme>

Facebook: <https://www.facebook.com/updivision?ref=vadl-readme>

Dribbble: <https://dribbble.com/updivision?ref=vadl-readme>

Linkedin: <https://www.linkedin.com/company/updivision?ref=vadl-readme>

Updivision Blog: <https://updivision.com/blog/?ref=vadl-readme>

## Credits

- [Creative Tim](https://creative-tim.com/?ref=vadl-readme)
- [UPDIVISION](https://updivision.com)
