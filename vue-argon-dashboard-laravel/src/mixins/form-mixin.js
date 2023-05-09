export default {
  data() {
    return {
      isLoading: false,
      apiValidationErrors: {}
    };
  },
  methods: {
    /* extract API server validation errors and assigns them to local mixin data */
    setApiValidation(serverErrors) {
      if(serverErrors.attachment)
      {
      this.apiValidationErrors = { "attachment": [ serverErrors.attachment[0] ]}
      return {['attachment']: serverErrors.attachment[0]}
      }
      this.apiValidationErrors = serverErrors.reduce(
        (accumulator, errorObject) => {
          if (typeof errorObject.source === "undefined") return false;

          const errorFieldName = errorObject.source.pointer.split("/")[3];
          const errorDetail = (accumulator[errorFieldName] || []).concat(
            errorObject.detail
          );

          return {
            ...accumulator,
            [errorFieldName]: errorDetail
          };
        },
        {}
      );
    },

    resetApiValidation() {
      this.apiValidationErrors = {};
    }
  }
};
