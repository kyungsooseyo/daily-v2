const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    //~ 在vue-cli 5.0.8中 @默认就是src文件夹
    // ~ 若想通过control+鼠标左键点进去 还需要在jsconfig.json中配置 paths
    config.resolve.alias.set('@/components', resolve('src'))
  }
})
