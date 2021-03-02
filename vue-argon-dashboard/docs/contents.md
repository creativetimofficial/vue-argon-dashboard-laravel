# Contents

Discover what’s included in Bootstrap, including our precompiled and source code flavors.
Remember, Bootstrap’s JavaScript components require Bootstrap Vue.

<hr>

#### Argon Structure

Once downloaded, unzip the compressed folder and you’ll see something like this:

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

#### Bootstrap components

Here is the list of Bootstrap 4 components that were restyled in Argon:

<div class="row row-grid mt-5">
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Alerts</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Badge</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Buttons</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Carousel</h6>
      </div>
    </div>
  </div>
</div>

<div class="row row-grid">
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Dropdowns</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Forms</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Modal</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Navs</h6>
      </div>
    </div>
  </div>
</div>

#### Argon components

Besides giving the existing Bootstrap elements a new look, we added new ones, so that the interface and consistent and homogenous. Going through them, we added:

<div class="row row-grid mt-5">
    <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Datepicker</h6>
      </div>
    </div>
    </div>
    <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Sliders</h6>
      </div>
    </div>
    </div>
    <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Checkboxes</h6>
      </div>
    </div>
    </div>
    <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Radio buttons</h6>
      </div>
    </div>
    </div>
 </div>

<div class="row row-grid">
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Toggle buttons</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Font Awesome</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Nucleo icons</h6>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="card shadow-sm">
      <div class="p-4 text-center">
        <h6 class="mb-0">Modals</h6>
      </div>
    </div>
  </div>
</div>
