1. 给 echarts 树状图添加点击事件方法：

### 代码如下

```javascript

 echarts.init('dom节点').on("click",(parms)=>{...balabala})

```

2.  给 echarts 添加点击节点异步获取数据并展开子节点的代码

### 代码如下

```javascript
if (typeof param.seriesIndex === undefined) return
    if (param.type == 'click') {
      if (!param.data.hasChild) {
        if (param.data.collapsed == undefined || param.data.collapsed == true) {
          // console.log('未定义或者是未展开，下次即将展开')
          param.data.collapsed = false
        } else {
          // console.log('下次不展开')
          param.data.collapsed = true
        }
        return
      }
      param.data.children.push('后端返回的数据')
      param.data.hasChild = false
      param.data.collapsed = false
      // 重新获取echarts dom节点
      const vNode = this.$refs['echart-left'] as HTMLDivElement
      const vueEcharts = echarts.init(vNode)
      const data: any = (vueEcharts.getOption() as any).series[0].data
      // 清楚echart图表
      vueEcharts.clear()
      // 重新渲染echarts图表
      vueEcharts.setOption({}) //重新 setOption 部分数据需要后端支持
```

3. 本项目重写 vue-router 的 interface 声明 并内置过滤左侧菜单 function 只需要配置好路由菜单即可，动态生成左侧菜单
4. layout 主页面使用 element-ui 定义好的组件，抛弃原始使用 div 标签的原始布局，左侧菜单栏收起缩放更加流畅
5. 目前项目使用 mock.js 模拟数据，但是数据不够持久化，打算更换 easy-mock.js 代替现在 mock.js
6.
