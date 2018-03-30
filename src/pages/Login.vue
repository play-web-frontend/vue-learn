<template>
  <div>
    <h3>{{ title }}</h3>
    <input v-bind:type="accType" v-bind:value="acc" title="login name"/>
    <input type="password"/>
    <button>{{ loginBtnTitle }}</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  props: {
    title: {
      default: 'login'
    },
    accType: {
      default: 'text'
    },
    acc: {
      default: ''
    },
    loginBtnTitle: {
      default: 'ok'
    }
  }
}
</script>

<style scoped>

</style>
