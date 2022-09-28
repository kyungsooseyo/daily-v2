<template>
  <!-- 在v3中下面的那个可以使用可选链子 ?. 在v2中不行 -->
  <div id="app">
    <el-select v-model="value" placeholder="请选择" class="auto-width-select">
      <template #prefix>{{
        (options.find((item) => item.value === value) || {}).label
      }}</template>
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <div class="text-wrapper">
      <p>asdas</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶123232323232323232323232323232323232323232323232323232323232323'
      }, {
        value: '选项3',
        label: '蚵仔煎123阿萨德23阿萨德2312312'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
}
</script>

<style scoped lang="scss">
.text-wrapper {
  p {
    color: red;
    font-size: 20px;
  }
}
.auto-width-select {
  min-width: 120px;
  /deep/ .el-input__prefix {
    position: relative;
    left: 0;
    box-sizing: border-box;
    border: 1px solid #ffffff00;
    padding: 0 30px;
    height: 40px;
    line-height: 40px;
    // ! 不能使用display为none 因为要占据空间
    visibility: hidden;
  }
  /deep/ input {
    position: absolute;
  }
}
</style>
