<template>
  <div id="app">
  <header class="header"></header>
  <main class="main">
    <li v-for="(item,index) in list" :key="index"
    class="list"
    >
      <p>{{item.name}}</p>
      <p>{{item.old}}</p>
      <p>{{item.du}}</p>
    </li>
  </main>
  <footer class="footer">
    <footerBar />
  </footer>
    <!-- <router-view/> -->
  </div>
</template>
<script>
import footerBar from './components/footerBar'
export default {
  data() {
    return {
      list:[]
    }
  },
  components:{
    footerBar
  },
  created() {
    this.getData()
  },
  methods: {
    getData(){
      this.$http.get('/api/data').then(res=>{
        console.log(res.data.data)
        this.list=res.data.data
      })
    }
  },
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
#app {
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
}
html,body{
  width: 100%;
  height: 100%;
}
.header,.footer{
  width: 100%;
  height: 50px;
  background: #ccc;
}
.main{
  flex: 1;
  width: 100%;
  overflow: auto;
}
.list{
  width: 100%;
  height: 150px;
  margin: 10px;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
