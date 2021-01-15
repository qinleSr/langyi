<template>
    <div class="footer_box">
        <div class="right_timeBox">
            <!-- {{dateTime}} -->
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'footer',
    data(){
        return{
        
        }
    },
    created(){},
    mounted(){ 
    },
    methods:{
    }
}
</script>
<style  scoped>
.footer_box{
    display: flex;
    align-items: center;
    background: #5C4A3D;
}

</style>