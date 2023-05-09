<template>
  <span v-if="errors && errors.length">
    <small class="argon-error" v-text="errors[0]"/>
  </span>
</template>

<script>
  export default {
    name: "validation-error",
    props: {
      errors: {
        type: Array,
        default: () => ([])
      }
    }
  }
</script>
