### 问题

    ```javascript
    // 原来
    const data = result.data
    if(data != null && data.length > 0){
      ...操作数组
    }
    // 现在
    const data = result.data || []
    ...操作数组
    // 按规矩来讲 后端给前端返回数据的时候 本来是数组类型 就算没有数据也应该返回一个空数组 不应该返回null
    ```
    文件中遗留大量无用代码
    package.json文件中有很多没有使用过的依赖包 
