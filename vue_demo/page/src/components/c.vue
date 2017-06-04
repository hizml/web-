<template>
    <div class="pagination-wrap" v-cloak v-if="totalPage!=0">
        <ul class="pagination">
            <li :class="currentPage==1?'disabled':''"><a href="javascript:;" @click="turnToPage(1)">首页</a></li>
            <li :class="currentPage==1?'disabled':''"><a @click="turnToPage(currentPage-1)" href="javascript:;">上一页</a></li>
            <li><a href="javascript:;" @click="turnToPage(currentPage-3)" v-text="currentPage-3" v-if="currentPage-3>0"></a></li>
            <li><a href="javascript:;" @click="turnToPage(currentPage-2)" v-text="currentPage-2" v-if="currentPage-2>0"></a></li>
            <li><a href="javascript:;" @click="turnToPage(currentPage-1)" v-text="currentPage-1" v-if="currentPage-1>0"></a></li>
            <li class="active"><a href="javascript:;" @click="turnToPage(currentPage)" v-text="currentPage">3</a></li>
            <li><a href="javascript:;" @click="turnToPage(currentPage+1)" v-text="currentPage+1" v-if="currentPage+1<totalPage"></a></li>
            <li><a href="javascript:;" @click="turnToPage(currentPage+2)" v-text="currentPage+2" v-if="currentPage+2<totalPage"></a></li>
            <li><a href="javascript:;" @click="turnToPage(currentPage+3)" v-text="currentPage+3" v-if="currentPage+3<totalPage"></a></li>
            <li :class="currentPage==totalPage?'disabled':''"><a href="javascript:;" @click="turnToPage(currentPage+1)" >下一页</a></li>
            <li :class="currentPage==totalPage?'disabled':''"><a href="javascript:;" @click="turnToPage(totalPage)">尾页</a></li>
        </ul>
        <small class="small nowrap"> 当前第 <span class="text-primary" v-text="currentPage"></span> 页，共有 <span class="text-primary" v-text="totalPage"></span> 页</small>
        <div class="go">
          <div :class="isPageNumberError?'input-group error':'input-group'">
            <input class="form-control" type="number" v-model="goToPage"><a href="javascript:;" class="input-group-addon" @click="turnToPage(goToPage)">Go</a>
          </div>
        </div>
    </div>

</template>
<script>
    export default {
        props: ['totalPage','changeCallBack'],
        data(){
            return {
                currentPage: 1,
                isPageNumberError: false,
                goToPage:''
            }
        },
        methods: {
            turnToPage: function(num){
            console.log(num);

            var pageNum = parseInt(num);

            //页数不合法则退出
            if (!pageNum || pageNum > this.totalPage || pageNum < 1) {
                console.log('页码输入有误！');
                this.isPageNumberError = true;
                return false;        
            }else{
                this.isPageNumberError = false;
            }

            //更新当前页
            this.currentPage = pageNum;

            //页数变化时的回调
            this.changeCallBack(pageNum); 
            }
        }
    }

</script>

<style type="text/css">
ul {list-style-type: none;}
li {display: inline;}
a {color: #428bca; padding: 6px 12px; text-decoration: none; border: 1px solid #ddd;}

.pagination-wrap{ margin: 0 auto; text-align: center; }
.pagination { display: inline-block; margin: 20px 0; border-radius: 4px;}
.pagination>li>a { float: left; margin-left: -1px; line-height: 1.5;}
.pagination>li:first-child>a { margin-left: 0; border-top-left-radius: 4px; border-bottom-left-radius: 4px;}
.pagination>li:last-child>a { border-top-right-radius: 4px; border-bottom-right-radius: 4px;}
.pagination>.active>a { color: #fff; background-color: #428bca; border-color: #428bca; }
.pagination>.disabled>a, .pagination>.disabled>a:hover { color: #777; cursor: not-allowed; background-color: #fff; }

.small { margin: 0 10px; position: relative; top: -32px;}
.text-primary { color: #428bca; }

.input-group {display: table;}
.input-group-addon, .form-control { display: table-cell;}
.go { display: inline-block; width: 140px; top: -21px; position: relative; }
.form-control { display: block; height: 34px; border: 1px solid #ccc; border-radius: 4px 0 0 4px; text-indent:1em;}
.error .form-control{ border: 1px solid #d95656; }
.input-group-addon { vertical-align: middle; border-left: 0; font-size: 14px; color: #555; text-align: center; background-color: #eee; border-radius: 0 4px 4px 0; }


</style>