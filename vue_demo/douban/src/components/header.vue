<template>
  <div class="topbar">
    <slot name="left"></slot>
    <slot name="right"></slot>
    <slot></slot>
   <div class="topbar_txt"> <slot name="txt"></slot></div>
  </div>
</template>
<script>
  export default{

  }
</script>
<style>
  .topbar{ width: 100%; height:168px; position: fixed;top: 0;z-index: 1000 }
  .topbar .topbar_txt{  color: #494949; font-size: 48px;height: 168px; line-height: 168px; float: left; width: 100%; text-align: center}
</style>
