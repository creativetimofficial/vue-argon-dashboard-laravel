const isDemoPlugin = {
    install: (Vue) => {
      Vue.prototype.$isDemo = process.env.VUE_APP_IS_DEMO || 0;
    }
  }
    
export default isDemoPlugin