<template>
    <div class="alert bg-danger ms-2 me-3" style="border-color: transparent !important">
        <strong class="text-white">Add, Edit, Delete features are not functional. This is a PRO feature! Click 
                <a href="https://www.creative-tim.com/live/vue-argon-dashboard-pro-laravel" target="_blank">here</a> 
                to see the PRO product.</strong>
    </div>
    <div class="card ms-2 me-3">
        <div class="card-header pb-0 d-flex">
            <h6>Users List</h6>
            <argon-button
                color="success"
                size="sm"
                class="ms-auto"
                @click.prevent="actionShow"
                ><i class="fa fa-plus me-2"></i>Add User
            </argon-button>
        </div>
        <div class="card-body px-0 pt-0 pb-2">
            <div class="table-responsive p-0">
                <table class="table align-items-center mb-0">
                    <thead>
                        <tr>
                            <th
                                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-4"
                            >Name</th>
                            <th
                                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                            >Email</th>
                            <th
                                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                            >Created at</th>
                            <th class="text-secondary opacity-7"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="d-flex px-2">
                                    <div>
                                        <img src="../../../assets/img/team-4.jpg" class="avatar avatar-sm rounded-circle me-2" alt="spotify">
                                    </div>
                                    <div class="my-auto">
                                        <h6 class="mb-0 text-sm">Admin</h6>
                                    </div>
                                </div>
                            </td>
                            <td class="align-middle text-center text-sm">
                                <span class="text-secondary text-xs font-weight-bold">admin@jsonapi.com</span>
                            </td>
                            <td class="align-middle text-center">
                                <span class="text-secondary text-xs font-weight-bold">2020-01-01</span>
                            </td>
                            <td class="align-middle">
                                <a
                                  class="text-secondary font-weight-bold text-xs me-3 cursor-pointer"
                                  data-toggle="tooltip"
                                  data-original-title="Edit user"
                                  @click.prevent="actionShow"
                                ><i class="fas fa-user-edit"></i></a>
                                <a
                                  class="text-secondary font-weight-bold text-xs cursor-pointer"
                                  data-toggle="tooltip"
                                  data-original-title="Delete user"
                                  @click.prevent="actionShow"
                                ><i class="fas fa-trash"></i></a>
                            </td>
                        </tr>
                        <tr style="height: 100px"></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
  
<script>
import showSwal from '../../../mixins/showSwal';
import ArgonButton from '../../../components/ArgonButton.vue';

export default {
  name: "ListUserPage",
  mixins: [showSwal],
  components: {
    ArgonButton
  },
  methods: {
    actionShow() {
        this.showSwal({
            type: "error",
            message: "This is a PRO feature.",
            width: 250
        });
    }
  }
};
</script>
  