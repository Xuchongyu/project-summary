// if (true) {
//   var color = 'blue'
// }
// console.log(color)
// for (var i = 0; i < 10; i++) {
//   console.log(i)
// }
// console.log(i)
// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }
// console.log(i)
// function add(num1, num2) {
//   var num3 = num1 + num2
//   return num3
// }
// const result = add(10, 20)
// console.log(result)
// console.log(num3) // ReferenceError: num3 is not defined
// 'use strict'
// function add(num1, num2) {
//   num3 = num1 + num2
//   return num3
// }
// const result = add(10, 20)
// console.log(result)
// console.log(num3) 在非严格模式的情况下 num3 默认会被创建到全局环境中，在严格模式中不可以
// test findIndex
// const arr = [1, 2, 3, 45]
// const index = arr.findIndex((item) => item === 0)
// console.log(index)
// console.log(new Array('red', 'blur', 'green')) // 创建一个 red blue green的数组
// console.log(new Array(3))                      //创建一个包含3的数组项
// const arr = [1, 2]
// arr.splice(0, 0, 0)
// const arr1 = arr.unshift(0)
// const arr1 = arr.shift(1)
// console.log(arr)
// const colors = ['red', 'blur', 'green']
// const colors = [1, 2, 3, 4]
// colors[99] = 'black'
// console.log(colors)
// console.log(colors instanceof Array)
// console.log(Array.isArray(colors))
// console.log(Array.toString())
// console.log(colors.valueOf())
// console.log(colors.toLocaleString())
// const person = {
//   toLocaleString() {
//     return 'toLocaleString 1'
//   },
//   toString() {
//     return 'toString 1'
//   },
// }
// const person2 = {
//   toLocaleString() {
//     return 'toLocaleString 2'
//   },
//   toString() {
//     return 'toString 2'
//   },
// }
// const array = [person, person2]
// console.log(array)
// console.log(array.toLocaleString())
// console.log(array.toString())
// const str = 'aaaa1212121212112212112'
// const str2Arr = str.split('')

// let startIndex = 0
// let lastStr = ''
// str2Arr.forEach((item, index) => {
//   const text = str.substr(startIndex, index)
//   const spanNode = document.createElement('span')
//   spanNode.innerHTML = text
//   spanNode.className = 'getTextWidth'
//   document.querySelector('body').appendChild(spanNode)
//   const wdith = document.querySelector('.getTextWidth').offsetWidth
//   document.querySelector('.getTextWidth').remove()
//   if (wdith > 10) {
//     startIndex = index
//     lastStr += text + '\n'
//   }
// })
// console.log(lastStr)
// const arr = [1, 2, 3, 4, 5, 666]
// const maxVaule = Math.max.apply(null, arr)
// console.maxValue(maxVaule)
// const maxValue = arr.reduce((x, y, z) => {
//   return x > y ? x : y
// }, 0)
// console.log(maxValue)
// const setData = new Set([1, 2, 3, 4, 5, 5])
// setData.forEach((item) => {
//   console.log(item)
// })
// set转数组
// const arrayFromData = Array.from(setData)
// setData.add(6).add(7)
// setData.delete(5)
// setData.clear()
// console.log(setData, setData.size)
// console.log(setData.has(1))

// console.log(arrayFromData)

/**
 * es5数组去重
 */
// var array = [1, '1', 1, 2, 3, 2, 4]
// var tmpObj = {}
// var result = []
// array.forEach(function (a) {
//   var key = typeof a + a
//   console.log(!tmpObj[key])
//   if (!tmpObj[key]) {
//     tmpObj[key] = true
//     console.log(tmpObj)
//     result.push(a)
//   }
// })
// console.log(result)
// const mapData = new Map([[{ a: 1234 }, 2]])
// mapData.set({ a: 1, b: 2 }, 'value1')
// console.log(mapData)
// function P() {}
// P.prototype.name = '徐崇玉'
// const p1 = new P()
// const status = p1.hasOwnProperty('name')
// console.log(status)
// console.log(P.prototype.constructor === P)
// console.log(P.prototype.isPrototypeOf(p1)) //判断P是不是p1的构造函数 或者判断p1是不是P的实例
// const p2 = new P()
// p2.name = 'selfName'
// delete p2.name
// console.log(p1.name, p2.name)
// 给后端返回的数据排序
// const array = [
//     {
//         key: 'esms',
//         href: '/esms',
//         name: 'ES管理平台',
//     },
//     {
//         key: 'index',
//         href: '/index.html',
//         name: '数据开发',
//     },
//     {
//         key: 'metis',
//         href: '/metis.html',
//         name: '实时开发',
//     },
//     {
//         key: 'dsManager',
//         href: '/dsManager.html',
//         name: '数据服务',
//     },
//     {
//         key: 'dataSync',
//         href: '/dataSync.html',
//         name: '数据同步',
//     },
//     {
//         key: 'dqc',
//         href: '/dqc.html',
//         name: '数据质量',
//     },
//     {
//         key: 'map',
//         href: '/map.html',
//         name: '数据地图',
//     },
//     {
//         key: 'assets',
//         href: '/assets.html',
//         name: '数据资产',
//     },
//     {
//         key: 'jobops',
//         href: '/jobops.html',
//         name: '任务运维',
//     },
//     {
//         key: 'access',
//         name: '权限管理',
//         children: [
//             {
//                 key: 'auth',
//                 href: '/auth.html',
//                 name: '数据权限',
//             },
//             {
//                 key: 'mastiff',
//                 href: '/mastiff.html',
//                 name: '功能权限',
//             },
//         ],
//     },
//     {
//         key: 'measure',
//         href: '/measure.html',
//         name: '指标中心',
//     },
//     {
//         key: 'adminManager',
//         href: '/adminManager.html',
//         name: '高级管理',
//     },

//     {
//         key: 'billing-web',
//         href: '/bigdata/billing-web',
//         name: '计费系统',
//     },
// ]
// const sortArray = array.sort((a, b) => {
//     return a.name.length - b.name.length
// })
// console.log(sortArray)
// const getHuskyHeader = function () {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve()
//         }, 2000)
//     })
// }
// getHuskyHeader().then((res) => {
//     console.log('哈哈哈')
// })
// function createFunctions() {
//     var result = new Array()
//     for (var i = 0; i < 10, i++; ) {
//         console.log(i)
//         result[i] = function () {
//             return i
//         }
//     }
//     // console.log(result)
//     return result
// }
// console.log(createFunctions())
// const name = 'the window'
// const object = {
//     name: 'the object',
//     getName: () => {
//         // console.log(this)
//         return function () {
//             return this.name
//         }
//     },
// }
// console.log(object.getName()())
// const obj = {}
// console.log(!!obj)
/**
 * 递归函数 自定调用自己 的另外一种方式 arguments.callee
 */
// let num = 0
// function conso() {
//     if (num > 11301) {
//         console.log('哈哈哈 大于5000了')
//         // retur
//     } else {
//         num++
//         console.log(num)
//         arguments.callee()
//     }
// }
// conso()
// const errlog =
//     'debugId = 30701,MARS# 2020-07-27 10:41:13 进入任务队列\nMARS# 2020-07-27 10:41:15 mars机器上任务开始运行, 进行SUCCESS文件检测\nMARS# 2020-07-27 10:41:17 开始运行\nMARS# 2020-07-27 10:41:18 开始执行前置处理单元：DownloadJob\nMARS# 2020-07-27 10:41:18 前置处理单元：DownloadJob 处理完毕\nMARS# 2020-07-27 10:41:18 开始执行核心Job任务\nMARS# 2020-07-27 10:41:18 开始执行脚本 alter table'
// const replaceStr = errlog.replace(/\n/g, '<br/>')
// console.log(replaceStr)
// function throttle(func, gapTime) {
//     if (typeof func !== 'function') {
//         throw new TypeError('need a function')
//     }
//     gapTime = +gapTime || 0
//     let lastTime = 0

//     return function () {
//         let time = +new Date()
//         if (time - lastTime > gapTime || !lastTime) {
//             func()
//             lastTime = time
//         }
//     }
// }

// setInterval(
//     throttle(() => {
//         console.log('xxx')
//     }, 1000),
//     10
// )
// const reg = /^[\u4e00-\u9fa5\.\a-zA-Z0-9]+$/
// console.log(reg.test('123.abd'))
// var a = 10,
//     b = 20
// a ^= b
// b ^= a
// a ^= b
// 等价于 [a,b] = [b,a]
// ;[a, b] = [b, a]
// console.log()
// console.log(a, b)
// import sqlFormatter from './src/sqlFormatter'
// console.log(sqlFormatter)
console.log(a)
var a = 1
