<template>
     <div class="Echarts">
    <div id="main" style="width: 900px;height:400px;"></div>
  </div>
</template>
<script>

export default {
    data(){
        return{}
    },
    mounted(){
        this.myEcharts();
    },
    methods:{
        myEcharts(){
		  // 基于准备好的dom，初始化echarts实例
		  var myChart = this.$echarts.init(document.getElementById('main'));

		  var option = {
            tooltip: {              //设置tip提示
                trigger: 'axis'
            },
            
            legend: {               //设置区分（哪条线属于什么）
                data:['大宝','二宝']
            },
            color: ['#8AE09F', '#FA6F53'],       //设置区分（每条线是什么颜色，和 legend 一一对应）
            xAxis: {                //设置x轴
                type: 'category',
                boundaryGap: false,     //坐标轴两边不留白
                data: ['2020-3-30', '2020-4-1', '2020-4-2', '2020-4-3', '2020-4-4', '2020-4-5', '2020-4-6',],
                name: 'DATE',           //X轴 name
                nameTextStyle: {        //坐标轴名称的文字样式
                    color: '#FA6F53',
                    fontSize: 16,
                    padding: [34, 35, 36, 20]
                },
                axisLine: {             //坐标轴轴线相关设置。
                    lineStyle: {
                        color: '#333',
                    }
                }
            },
            yAxis: {
                name:"体温",
                interval:2,
                min:34,
                max:42,
                nameTextStyle: {
                    color: '#333',
                    fontSize: 14,
                  
                },
                axisLine: {
                    lineStyle: {
                        color: '#333',
                    }
                },
                type: 'value'
            },
            series: [
              {
                name: '大宝',
                data:  [36.1,36.3,36.5,37,38,36.8,36.7],
                type: 'line',               // 类型为折线图
                lineStyle: {                // 线条样式 => 必须使用normal属性
                    normal: {
                        color: '#8AE09F',
                    }
                },
              },
              {
                name: '二宝',
                data: [36.3,36.3,36.4,37.1,38.2,37.8,38.7],
                type: 'line',
                lineStyle: {
                    normal: {
                        color: '#FA6F53',
                    }
                },
              }
          ]
        };

		 
		  // 使用刚指定的配置项和数据显示图表。
		  myChart.setOption(option);
		  }
    }
}
</script>
