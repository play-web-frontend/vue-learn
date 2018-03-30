<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
          <div>
            <el-row type="flex" justify="center">
              <el-col :span="24">
                <div>
                  <el-transfer v-model="value4"  :props="{ key: 'value', label: 'desc' }" :data="data3">
                  </el-transfer>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'user-permission-assignment',
  data () {
    const generateData3 = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          value: i,
          desc: `备选项 ${i}`,
          disabled: i % 4 === 0
        })
      }
      return data
    }
    return {
      data3: generateData3(),
      value4: []
    }
  }
}
</script>

<style scoped>

</style>
