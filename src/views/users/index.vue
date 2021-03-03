<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
 import axios from 'axios'

var axiosProxyS = axios.create({
  headers: { 'Content-Type': 'application/x-www-form-urlencoded',
             'Referrer-Policy': 'no-referrer-when-downgrade' },
  baseURL: 'https://ilapiheroku.herokuapp.com',
  timeout: 5000,
})

export default {
  name: 'userlist',
  data () {
    return {
      msg: 'user listinsg',
      users: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
  getData: function () {
    var vm = this
    axiosProxyS.get('/users')
      .then(function (res) {
        console.dir(res.data)
        vm.users = res.data
      })
      .catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
