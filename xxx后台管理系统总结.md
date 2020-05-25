### 本项目为自己没事做所启用的项目，目的是争取搭建一个完整的后台管理系统

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
4. 菜单中支持外部链接、默认高亮、自定义 icon、外部链接跳转方式等等
5. layout 主页面使用 element-ui 定义好的组件，抛弃原始使用 div 标签的原始布局，左侧菜单栏收起缩放更加流畅
6. 目前项目使用 mock.js 模拟数据，但是数据不够持久化，打算更换 easy-mock.js 代替现在 mock.js
7. mock.js 替换成 easy-mock.js 成功

### 流程如下

- 登陆 easy-mock.js 官网，并且注册账号；
- 里面有个项目展示，照葫芦画瓢即可，炒鸡简单；

1. 本项目还切换页面的时候添加动画效果

### 代码如下

```html
<transition: name= 'transitionName' > <router-view></router-view> </transition>;
```

```css
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 0.5s;
  position: absolute;
  top: 20px;
  right: 0;
  left: 0;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
```
