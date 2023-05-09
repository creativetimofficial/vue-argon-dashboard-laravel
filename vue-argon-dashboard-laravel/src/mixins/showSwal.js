import Swal from "sweetalert2";

export default {
    methods:{
        showSwal(options) {
            new Swal({
                toast: true,
                position: "top-right",
                iconColor: "white",
                width: options.width ? options.width : 300,
                text: options.message,
                customClass: {
                    popup: options.type === "success" ? "colored-toast-success" : "colored-toast-error",
                },
                showConfirmButton: false,
                showCloseButton: true,
                timer: 2000,
                timerProgressBar: true,
            });
        },
        showSwalConfirmationDelete() {
            const swalDelete = new Swal({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
                customClass: {
                  confirmButton: "btn bg-gradient-success",
                  cancelButton: "btn bg-gradient-danger",
                },
                buttonsStyling: false,
              });
            
            return swalDelete;
        },
    }
}