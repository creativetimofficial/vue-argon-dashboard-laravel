<template>
  <div>
    <base-header type="gradient-success" class="pb-6 pb-6 pt-5 pt-md-5">
    </base-header>
    <div class="container-fluid mt-5">
      <card body-classes="px-0 pb-1" footer-classes="pb-2">
        <div class="card-header border-0">
          <div class="row align-items-center">
            <div class="col">
              <h3 class="mb-0">Users List</h3>
            </div>
            <div class="col text-right">
              <base-button type="primary" icon size="sm" @click="onProFeature">
                <i class="fas fa-user-edit mr-2"></i>
                <span class="btn-inner--text">Add User</span>
              </base-button>
            </div>
          </div>
        </div>

        <div class="table-responsive">
          <base-table
            class="table align-items-center table-flush"
            tbody-classes="list"
            :data="users"
            :thead-classes="'thead-light'"
          >
            <template slot="columns">
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th></th>
            </template>

            <template slot-scope="{ row }">
              <td>
                {{ row.name }}
              </td>
              <td>
                {{ row.email }}
              </td>
              <td>
                {{ row.created_at }}
              </td>
              <td>
                <a style="cursor: pointer" @click="onProFeature" class="mr-2">
                  <i class="fas fa-user-edit"></i>
                </a>
                <a style="cursor: pointer" @click="onProFeature">
                  <i class="fas fa-trash"></i>
                </a>
              </td>
            </template>
          </base-table>
        </div>

        <div class="card-footer d-flex justify-content-end">
          <base-pagination total="1"></base-pagination>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [
        {
          name: "Admin",
          email: "admin@jsonapi.com",
          created_at: "2020-01-01",
        },
      ],
    };
  },
  methods: {
    onProFeature() {
      this.$notify({
        type: "danger",
        message: "This is a PRO feature.",
      });
    },
  },
};
</script>
<style>
</style>
