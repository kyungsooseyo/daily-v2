<template>
  <div>
    <button>查询</button>
    <button v-hasRole="'admin'">编辑</button>
    <button v-hasRole="'admin'">删除</button>
  </div>
</template>

<script>
import hasRole from '../directive/hasRole'
export default {
  name: 'OwnDirective',
  directives: {
    hasRole
  }
}
</script>

<style>
</style>