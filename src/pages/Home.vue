<template>
  <el-container class="wrapper">
    <el-header height="80px" style="background-color: #526477">
      <img
        src="@/assets/logo.png"
        alt="application-logo"
        class="header-logo">
      <div class="block">
        <span class="demonstration">默认</span>
        <el-date-picker
          v-model="value1"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </div>
    </el-header>
    <el-aside>side menus</el-aside>
    <el-main>client area</el-main>
    <el-footer>footer</el-footer>
  </el-container>
</template>

<script>
export default {
  data: function () {
    return {
      value1: ''
    }
  }
}
</script>

<!--<style lang="scss">
  @import '../styles/index.scss';
</style>-->
