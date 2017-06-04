<template>
  <div class="tabbar-item" @click="press">
    <span v-show="isActive"><slot name="active_icon"></slot></span>
    <span v-show="!isActive"><slot name="normal_icon"></slot></span>
    <span :class="{act:isActive}"><slot name="txt"></slot></span>
  </div>
</template>
<script>
  export default{
    props:['mark'],
    computed:{
      isActive(){
        if(this.mark===this.$parent.val){
          return true;
        }
      }
    },
    methods:{
      press:function(){
        this.$router.push(this.mark);   //路由
        //this.$parent.val=this.mark;
        this.$parent.$emit('input',this.mark)
      }
    }
  }
</script>
<style>
  .tabbar-item{ width: 20%; float: left; text-align: center; font-size: 28px;}
  .tabbar-item img{width:100px; padding-bottom: 28px;}
  .txt{text-align: center;  margin-top: -20%}
  .act{color:#42bd56;}
</style>

