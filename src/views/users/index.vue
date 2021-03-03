<template>
  <div class="main">
    <div class="header">
      <h1>{{ msg }}</h1>
      <div class="search">
        <input class="searchfield" type="text" placeholder="search" v-model="searchKey" />
      </div>
    </div>
    <div class="container">
      <div v-for="(user, i) in queriedData" :key="i">
        <user-card  :user="user" />
      </div>
    </div>
    <div class="pagination">
      <a href="#">&laquo;</a>
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">&raquo;</a>
    </div>
  </div>
</template>

<script>
import userCard from './components/UserCard'
import Fuse from "fuse.js"
import { getUsers } from '../../api/user'

export default {
  name: 'userlist',
   components: {
    userCard
  },
  data () {
    return {
      msg: 'Users',
      columns: [ 'name', 'title', 'description', 'created_date'],
      searchKey: '',
      UsersList: [],
      searchedData: [],
      fuseSearch: null,
    }
  },
  created() {
    this.getUsers()
  },
  computed: {
    users() {
      return this.$store.getters.users
    },
    queriedData() {
      let result = this.UsersList;
      if (this.searchedData.length > 0) {
        result = this.searchedData;
      }
      return result
      //return result.slice(this.from, this.to);
    },
  },
  methods: {
    async getUsers() {
      const res = await getUsers()
      this.UsersList = res.data
      this.searchedData = res.data
      console.log('user...')
      console.log(JSON.stringify(this.UsersList, null, 4))
      // this.$store.dispatch('setUsers')
      // Fuse search initialization.
      this.fuseSearch = new Fuse(this.UsersList, {
        keys: ["name", "email"],
        threshold: 0.3
      })
    },
  },
  watch: {
    searchKey(value) {
      let result = this.UsersList
      if (value !== "") {
        result = this.fuseSearch.search(this.searchKey);
      }
      this.searchedData = result;
    }
  }
}
</script>

<style lang='scss'>

  $bg-main: #a9cca0;

  body, html {
    margin: 0;
    font-family: 'RalewayRegular', sans-serif;
  }

  .pagination {
    display: inline-block;
  }

  .pagination a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .header {
    padding: 2px 16px;
    width: 40%;
    background: $bg-main;
  }

  .container {
    padding: 2px 16px;
    width: 40%;
    background: $bg-main;
  }

  .search {
    background: $bg-main;
    width: 80%;
    position: relative;
    display: flex;
  }

  .searchfield {
    width: 100%;
    border: 3px solid #589460;
    padding: 5px;
    height: 20px;
    border-radius: 10px;
    outline: none;
    color: #53ca92;
  }

  .searchfield:focus{
    border: 3px solid #068d1c;
  }

</style>
