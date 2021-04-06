## Vue Frontend Setup

To start using this dashboard you will need to to install some dependencies or copy some files to your
project.

<hr>

#### Steps to install

1. Navigate to your Vue Dashboard project folder: `cd your-vue-argon-dashbord-project`
2. Install project dependencies: `npm install`
3. Create a new .env file: `cp .env.example .env`
4. `VUE_APP_BASE_URL` should contain the URL of your Vue Argon Dashboard Project (eg. http://localhost:8080/)
5. `VUE_APP_API_BASE_URL` should contain the URL of your Laravel JSON:API Project. (eg. http://localhost:3000/api/v1)
6. Run `npm run dev` to start the application in a local development environment or `npm run build` to build release distributables.

#### Argon Dashboard

Argon Dashboard is built as Vue plugin so you can simply import it and use it.

```js
import Vue from "vue";
import ArgonDashboard from "@/plugins/argon-dashboard";
Vue.use(ArgonDashboard);
```

#### Global Components

Argon comes with an extensive set of custom Vue components. Some of them are globally instantiated so
it's easier to use them across the app without importing them each time.

Here's the list of global components:

- **Badge**
- **BaseAlert**
- **BaseButton**
- **BaseCheckbox**
- **BaseInput**
- **BaseDropdown**
- **BaseNav**
- **BasePagination**
- **BaseProgress**
- **BaseRadio**
- **BaseSlider**
- **BaseSwitch**
- **BaseTable**
- **BaseHeader**
- **Card**
- **StatsCard**
- **Modal**
- **TabPane**
- **Tabs**
- **Sidebar**
- **SidebarItem**

#### Local components

Besides the components mentioned above, we have some extra components/plugins that are usually less used
and bigger. In order to not affect the overall bundle size of the Argon Kit, they should be imported locally.

Here's the list of local components:

- **CloseButton**
- **NavbarToogleButton**
- **Tabs**
- **TabPane**

#### Starter template

To get started faster, we provide a starter template inside the project. It's a bare bones
layout with nav, footer and a hello world. To enable it go to **main.js** and change line 3

```js{3}
import Vue from "vue";
import App from "./App.vue";
import router from "./starterRouter";
```

## Resources and credits

**An user-friendly, open source and beautiful dashboard based on Bootstrap 4.**

<hr>

We at Creative Tim have always wanted to deliver great tools to all the web developers. We want to see better websites and web apps on the internet. Argon design

<div class="row mt-5">
  <div class="col-md-4">
    <div class="icon icon-shape bg-gradient-primary rounded-circle text-white mb-3">
      <i class="ni ni-html5"></i>
    </div>
    <h6>Developer First</h6>
    <p class="description">Argon dashboard is a "Developer First" product, with a lot of variables for colors, fonts, sizes and other elements.</p>
  </div>
  <div class="col-md-4">
    <div class="icon icon-shape bg-gradient-danger rounded-circle text-white mb-3">
      <i class="ni ni-paper-diploma"></i>
    </div>
    <h6>High quality before everything</h6>
    <p class="description">We are following the latest code standards provided by the guys from Bootstrap, so you will love working with this dashboard.</p>
  </div>
  <div class="col-md-4">
    <div class="icon icon-shape bg-gradient-warning rounded-circle text-white mb-3">
      <i class="ni ni-favourite-28"></i>
    </div>
    <h6>Community helpers</h6>
    <p class="description">Since all our products are built on top of Open Source also Argon dashboard is released under
      <a href="https://github.com/creativetimofficial/vue-argon-dashboard/blob/master/LICENSE.md">MIT License</a>.</p>
  </div>
</div>

#### Resources and credits

This dashboard is fully coded and built on top of Open Source, more details here:

- [Bootstrap 4](http://getbootstrap.com/) - Open source front end framework
- [Vue](http://vuejs.org/) - The Progressive JavaScript Framework
- [Vue CLI](https://cli.vuejs.org/) - 🛠️ Standard Tooling for Vue.js Development
- [Vue Router](https://router.vuejs.org/) - Router for Vue.js
- [noUISlider](https://refreshless.com/nouislider/) - JavaScript Range Slider</li>
- [Open Sans Font](https://fonts.google.com/specimen/Open+Sans) - Google’s Open Source typefaces
- [Stripe Elements](https://github.com/stripe/elements-examples/#example-1) - Forms, Buttons and Elements
- [Bootstrap Vue](https://bootstrap-vue.js.org/) - Vue components for Bootstrap 4
- [Flatpickr](https://flatpickr.js.org/) - Lightweight, powerful javascript date picker
- [WebGradients](https://webgradients.com/) - A curated collection of splendid gradients made in CSS3

#### Learn more

Stay up to date on the development journey and connect with us on:

<ul>
  <li>Follow Creative Tim on
    <a href="https://twitter.com/creativetim">Twitter</a>.</li>
  <li>Read and subscribe to The Official
    <a href="https://blog.creative-tim.com">Creative Tim Blog</a>.</li>
  <li>Follow Creative Tim on
    <a href="https://www.instagram.com/creativetimofficial">Instagram</a>.</li>
  <li>Follow Creative Tim on
    <a href="https://www.facebook.com/creativetim">Facebook</a>.</li>
</ul>

<ul>
  <li>Follow Updivision on
    <a href="https://www.facebook.com/updivision/">Facebook</a>.</li>
  <li>Follow Updivision on
    <a href="https://twitter.com/updivision/">Twitter</a>.</li>
  <li>Follow Updivision on
    <a href="https://www.linkedin.com/company/updivision">Linkedin</a>.</li>
  <li>Read and subscribe to The Official
    <a href="https://updivision.com/blog/">Updivision Blog</a>.</li>
</ul>
