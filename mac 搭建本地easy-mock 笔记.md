### 本笔记是记录要给本地 vue 项目搭建本地 easy-mock，所遇到的问题

1.  要搭建本地的 easy-mock 需要安装 node.js(要求版本在 v8.x 版本的，搜索网上的问题给出的答案是 v8.9.1)，索性使用 nvm 下载 v 8.9.1 的 node
2.  安装 redis 和 mongodb，这时候需要在 mac 上面需要下载 homeBrew 依赖包

    ### 所遇到的问题：

    1. 在 shell 命令状当中输入指令 /bin/bash -c "\$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)" 结果遇到一个英文报错：curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused 百度了一下 是网络的问题，于是开了 vpn
    2. 在次输入指令，正常开始，然后 shell 命令框出现如下图所示：

    ```javascript
    λ operadeMBP study → /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    ==> This script will install:
    /usr/local/bin/brew
    /usr/local/share/doc/homebrew
    /usr/local/share/man/man1/brew.1
    /usr/local/share/zsh/site-functions/_brew
    /usr/local/etc/bash_completion.d/brew
    /usr/local/Homebrew
    ==> The Xcode Command Line Tools will be installed.

    Press RETURN to continue or any other key to abort
    ==> Searching online for the Command Line Tools
    ```

    3. 出现‘RETURN’提示你输入回车 进行下一步
    4. 此时在安装 brew 和 Xcode
    5. 开始安装 redis brew install redis
    6. 安装 mogodb brew install mangodb
    7. 无意中 看到关于 brew 相关的问题 macOS brew install XXX 一直卡在 Updating Homebrew…的解决办法

    解决办法是替换 brew 源：

        --使用新源：

        替换brew.git:
        cd "$(brew --repo)"
        git remote set-url origin https://mirrors.ustc.edu.cn/brew.git

        替换homebrew-core.git:
        cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
        git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git


        --恢复默认源：

        重置brew.git:
        cd "$(brew --repo)"
        git remote set-url origin https://github.com/Homebrew/brew.git

        重置homebrew-core.git:
        cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
        git remote set-url origin https://github.com/Homebrew/homebrew-core.git

    8.  直接运行 brew instatll mongodb 会报找不到的错误：No available formula with the name "mongodb"

    解决方法:

        brew tap mongodb/brew      //首先tap一个仓库

        brew install mongodb-community   //安装社区版  

        下载后的文件在usr/local/Cellar/下的mongodb-community

        配置变量：

        进入本机当前用户文件夹

        1.cd ~

        2.open -e .bash_profile //打开.bash_profile

        //.bash_profile中添加
        3.export PATH=${PATH}:/usr/local/Cellar/mongodb-community/4.2.3/bin
        //.bash_profile文件关闭


        //在命令行输入以下命令，使配置生效
        4.source .bash_profile


        //在命令行输入依稀命令查看版本
        5.mongod -version

        //新建一个存放数据的目录
        6.sudo mkdir -p /data/db

        //进入到db文件夹上一层/data，修改文件夹db权限
        7.sudo chmod -R 777 db

        //启动
        8.mongod
        //看到这句表示启动成功
        waiting for connections on port 27017

    mac使用Redis的方法:

        1. 启动指令:redis-server /usr/local/etc/redis.conf
        2. 停止指令:redis-cli SHUTDOWN
        3. 启动成功shell命令框会出现:
          /usr/local/Cellar/redis/5.0.8: 13 files, 3.1MB
          redis-server /usr/local/etc/redis.conf                       ~@operadeMacBook-Pro.local
          49754:C 24 May 2020 21:39:15.940 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
          49754:C 24 May 2020 21:39:15.940 # Redis version=5.0.8, bits=64, commit=00000000, modified=0, pid=49754, just started
          49754:C 24 May 2020 21:39:15.940 # Configuration loaded
          49754:M 24 May 2020 21:39:15.941 * Increased maximum number of open files to 10032 (it was originally set to 2560).
          49754:M 24 May 2020 21:39:15.941 # Could not create server TCP listening socket 127.0.0.1:6379: bind: Address already in use
          > redis-cli SHUTDOWN                                           ~@operadeMacBook-Pro.local
          > redis-server /usr/local/etc/redis.conf                       ~@operadeMacBook-Pro.local
          49773:C 24 May 2020 21:39:59.524 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
          49773:C 24 May 2020 21:39:59.524 # Redis version=5.0.8, bits=64, commit=00000000, modified=0, pid=49773, just started
          49773:C 24 May 2020 21:39:59.524 # Configuration loaded
          49773:M 24 May 2020 21:39:59.525 * Increased maximum number of open files to 10032 (it was originally set to 2560).
                          _._
                    _.-``__ ''-._
                _.-``    `.  `_.  ''-._           Redis 5.0.8 (00000000/0) 64 bit
            .-`` .-```.  ```\/    _.,_ ''-._
          (    '      ,       .-`  | `,    )     Running in standalone mode
          |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
          |    `-._   `._    /     _.-'    |     PID: 49773
            `-._    `-._  `-./  _.-'    _.-'
          |`-._`-._    `-.__.-'    _.-'_.-'|
          |    `-._`-._        _.-'_.-'    |           http://redis.io
            `-._    `-._`-.__.-'_.-'    _.-'
          |`-._`-._    `-.__.-'    _.-'_.-'|
          |    `-._`-._        _.-'_.-'    |
            `-._    `-._`-.__.-'_.-'    _.-'
                `-._    `-.__.-'    _.-'
                    `-._        _.-'
                        `-.__.-'

          49773:M 24 May 2020 21:39:59.526 # Server initialized
          49773:M 24 May 2020 21:39:59.527 * DB loaded from disk: 0.000 seconds
          49773:M 24 May 2020 21:39:59.527 * Ready to accept connections
