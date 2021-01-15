<template>

    <div class="Input_Box">
        <input placeholder="请输入姓名/电话/档案ID" class="All_search">
        <button>搜索</button>
    </div>
       
</template>
<script>
export default {
    
}
</script>
<style scoped>

.Input_Box .All_search{
   line-height: 35px;
    width: 230px;
    margin: 0 20px;
    border: 2px solid #eee;
    border-radius: 3px;
}
.Input_Box .All_search:focus{
    outline: 0;
}
 .Input_Box button{
    border: 0;
    line-height: 35px;
    padding: 0 20px;
    background: #C19A67;
    font-size: 16px;
    color: #fff;
    border-radius: 3px;
}
 .Input_Box button:focus{
    outline: 0;
}
</style>