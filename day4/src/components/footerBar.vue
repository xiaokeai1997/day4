<template>
  <div class="footerBar">
    <router-link to="/shouye">首页</router-link>
    <router-link to="/xinxi">信息</router-link>
    <router-link to="/wode">我的</router-link>
  </div>
</template>
<style lang="scss">
  .footerBar{
    display: flex;
    a{
      flex: 1;
      text-align: center;
      line-height: 50px;
      color: black;
      &.router-link-exact-active {
      color: brown;
    }
    }
  }
</style>