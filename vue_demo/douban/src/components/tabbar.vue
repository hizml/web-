<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    props:['val']
  }
</script>
<style>
  .tabbar{ width: 100%; height: 144px; border-top: 3px solid #e4e4e4; background: #fff;position: fixed;bottom: 0 ;z-index: 1000}
</style>
