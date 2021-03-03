<template>
  <div id="app">
    <user-list/>
  </div>
</template>

<script>
import UserList from './views/users/index'

export default {
  name: 'App',
  components: {
    "user-list": UserList
  }
}
</script>

<style lang='scss'>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>

