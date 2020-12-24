// const array = []
// const pushItem = array.push(1, 2) //朴实push 方法可以改变元数组 向数组的后面添加一个元素 返回添加的元素个数
// console.log(array, pushItem)
// const popItem = array.pop() // pop方法 方法也可以改变数组 截取数组最后一位元素 返回被截取的元素
// console.log(popItem, array)
// const shiftItem = array.shift() //shift 方法 可以改变数组 截取数组第一个元素 返回被截取的第一个元素
// console.log(array, shiftItem)
// const unshiftItem = array.unshift(0, 1) //unshift 方法 可以改变原数组 向数组中开始的位置添加个元素，返回添加的元素个数
// console.log(unshiftItem, array)
// 数组去重
// console.log([...new Set([1, 1, 2, 3, 3, 3, 3, 4, 4, 4, 9])])
// 对象数组去重
// function unique(arr) {
//   let unique = {}
//   arr.forEach(function (item) {
//     unique[JSON.stringify(item)] = item //键名不会重复
//   })
//   arr = Object.keys(unique).map(function (u) {
//     //Object.keys()返回对象的所有键值组成的数组，map方法是一个遍历方法，返回遍历结果组成的数组.将unique对象的键名还原成对象数组
//     return JSON.parse(u)
//   })
//   return arr
// }
// const oA = [
//   {
//     name: '!23',
//   },
//   {
//     name: '!23',
//   },
//   {
//     name: '!23',
//   },
// ]
// console.log(unique(oA))
const array = [1, 2, 3, 4, 5]
// const newArray = array.reverse()
// console.log(newArray)
// const sortArray = array.sort((a, b) => {
//   // if (a > b) return -1
//   // else if (a < b) return 1
//   // else return 0
//   // return a - b
//   return b - a
// })
// const newArray = array.splice(0, 1)
// console.log(newArray, array)
// const str = '12345'
// console.log(array.split(0, 1))
/**
 * reduce
 */
// const maxValue = array.reduce((prev, item) => {
//   console.log(prev, item)
//   return prev > item ? prev : item
// })
// const maxValue = Math.max.apply(null, array)
// console.log(maxValue)
// const returnFucntion = () => {
//   // if (false) return true
// }
// function handle() {
//   // returnFucntion()
//   console.log(123)
// }
// handle()
// const usrPermission = ['1', '2', '3']
// const selfpermission = ['2', '4']
// console.log(
//     selfpermission.some((permission) => usrPermission.includes(permission))
// )
// console.log(Array.isArray(selfpermission))
function add() {
    const _args = [...arguments]
    console.log('第一层args', _args)
    function fn() {
        _args.push(...arguments)
        console.log('第二层args', _args)
        return fn
    }
    fn.toString = function () {
        return _args.reduce((sum, cur) => sum + cur)
    }
    console.log(fn)
    return fn
}
const result = add(1)(1, 2, 3)(2)
console.log(result())
