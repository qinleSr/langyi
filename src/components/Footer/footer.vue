<template>
    <div class="footer_box">
        <div class="right_timeBox">

        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'footer',
    data(){
        return{}
    },
    created(){},
    mounted(){
        this.get_time()
    },
    methods:{
        get_time(){
    var  date =  new  Date();
   var  year = date.getFullYear();
   var  month = date.getMonth() + 1;
   var  strDate = date.getDate();
   var hh = new Date().getHours()<10?"0"+new Date().getHours():new Date().getHours();
   var mm = new Date().getMinutes()<10?"0"+new Date().getMinutes():new Date().getMinutes();
   var ss = new Date().getSeconds()<10?"0"+new Date().getSeconds():new Date().getSeconds();
   if  (month >= 1 && month <= 9) {
     month =  "0"  + month;
   }
   if  (strDate >= 0 && strDate <= 9) {
     strDate =  "0"  + strDate;
   }
   var  dateTime = year + '-' + month + '-' + strDate;
   var Time=hh+':'+mm+':'+ss
          console.log(dateTime)
          console.log(Time)
        }
    }
}
</script>
<style  scoped>
.footer_box{
    display: flex;
    align-items: center;
}
.footer_box .right_timeBox{
    width: 200px;
}
</style>