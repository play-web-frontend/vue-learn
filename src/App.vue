<template>
  <el-container>
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
    <el-container>
      <el-aside class="aside">
        <el-row class="tac">
          <el-col :span="24">
            <h5>默认颜色</h5>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main class="panel">
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
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
// import
export default {
  data: function () {
    return {
      value1: ''
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
  @import './styles/index.scss';
</style>
