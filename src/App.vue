<template>
  <el-container class="wrapper">
    <el-header height="80px" class="header">
      <el-row type="flex" align="middle">
        <el-col :span="4">
          <img src="@/assets/logo.png" alt="application-logo" class="header-logo">
        </el-col>
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8" >
          <el-date-picker  v-model="value1" type="datetime" placeholder="选择日期时间"> </el-date-picker>
        </el-col>
        <el-col :span="6" align="right">
          <el-dropdown trigger="click">
            <el-button size="mini" round><i class="fa fa-user-circle fa-2x" aria-hidden="true"></i></el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>登出</el-dropdown-item>
              <el-dropdown-item>个人信息</el-dropdown-item>
              <el-dropdown-item>账号设置</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <el-container style="height: 95%">
      <el-aside class="aside">
        <el-row class="tac">
          <el-col :span="24">
            <div>菜单</div>
            <side-menu></side-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main class="panel" style="height: 100%">
          <el-row type="flex" >
            <el-col :span="4">
              <div>
                <i class="fa fa-user-circle fa-3x" aria-hidden="true"></i>
              </div>
            </el-col>
            <el-col :span="20">
              <div>
                <router-view></router-view>
              </div>
            </el-col>
          </el-row>
        </el-main>
        <!--<el-footer>Footer</el-footer>-->
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import SideMenu from './components/SideMenu'
export default {
  data: function () {
    return {
      value1: ''
    }
  },
  components: {
    'side-menu': SideMenu
  }
}
</script>

<style lang="scss">
  @import './styles/index.scss';
</style>
