# FXMinerProxy
<h4 align="center">基于Golang高性能Pow挖矿代理中转服务器软件.</h4>
<h4 align="center">支持ETH/ETC/BTC/LTC/RVN/CFX/TON/BEAM/ERG/BTG.</h4>
<h4 align="center">官网(http://www.fxpool.org).</h4>
<h4 align="center">免费SSL证书(http://www.fxpool.org).</h4>
<p align="center">
  <a>
    <img src="https://img.shields.io/badge/Release-7.0.1.4.3-orgin.svg" alt="travis">
  </a>
  <a>
    <img src="https://img.shields.io/badge/Last_Update-2022_06_02-orgin.svg" alt="travis">
  </a>
  <a>
    <img src="https://img.shields.io/badge/Language-GoLang-green.svg" alt="travis">
  </a>
  <a>
    <img src="https://img.shields.io/badge/License-Apache-green.svg" alt="travis">
  </a>
</p>

  ![](http://47.105.86.47/image/fxproxyminer/home1.jpg)
  
## :sparkles: 特性

* :cloud: 支持ETC,ETH,BTC,LTC,RVN,BEAM,ERG,CFX等多币抽水,内置独家开发的加密混淆客户端 一键配置自动生成执行程序win和os都支持,API 开放 UI源码开放，独家任何币种双挖支持
* :zap: 高性能百万并发CPU占用极低，30万连接cpu占用10%
* 💻 自定义作者抽水模式(范围0.1-0.2%)，PID抽水算法稳定算力曲线减少切换损耗，实时统计抽水转换率
* 📚 原创抽水算法针对e池优化e池抽水效果最好，无矿机离线bug曲线完美，比其他软件高出几个点
* 💾 安全稳定，原创aes混淆加密，模拟物联网流量安全稳定，后台一键配置自动生成window和linux版本，传统TLS/SSL TCP也支持，防御CC攻击
* :gear: 前置代理模式，内部配置提高访问速度，延迟快速响应支持，让用户的显示的延迟是你当前代理服务器的延迟
* :outbox_tray: 芯片矿机实时计算算力，解决芯片级无法显示算力的问题
* :card_file_box: 配置热修改，决绝传统配置后需重启修改配置文件等繁琐步骤，支持一键导入导出配置文件
* :art: 精美UI，支持历史记录曲线管理详细到单台矿机支持
* :eye_speech_bubble: 多人社区交流支持，不懂的问题都有人解答，QQ群:809118996，Telegram讨论组:
* :gear: 实时系统错误日志显示，让你知道任何时候服务器工作状态
* :family_woman_girl_boy: 多系统支持，windows，linux一键安装运行

## :hammer_and_wrench: 部署
### linux一键管理脚本(需root权限)
* 如果没有curl命令请输入 apt-get install curl 安装
```shell
  bash <(curl -s -L https://raw.githubusercontent.com/mingmingge891/FXMinerProxy/main/porttranpay.sh)
```
### windows直接下载解压运行run.exe
* 运行run.exe（可保证程序永不死机）
```shell
  https://raw.githubusercontent.com/mingmingge891/FXMinerProxy/main/windows/porttranwindows.zip
```  
## :alembic: 开发抽水  
* 固定0.27%  
## :scroll: 更新日志
```bigquery
2022-06-02 16:38     7.0.1.4.3>>主页添加运行时常
                     1.CPU内存等统计改为1分钟
                     2.修改RPC 参数为0个时报错的BUG
                     3.离线数据不用线程

2022-05-30 17:48     7.0.1.4.2>>UI界面大修改体验拉满
                     1.修改轻松旷工钱包地址错误导致停止挖矿的BUG
                     2.离线时间增加到30分钟
                     3.修改一些抽水的BUG
                     4.增加统计抽水转换率功能
                     5.增加显示矿池平均延迟和单矿机的延迟
                     6.增加对单个矿池的24小时统计图标功能和单个矿工的24小时统计
                     7.综合统计加入抽水转换率和平均延迟，支持1,7,30天查看
                     
2022-05-17 02:33     7.0.1.3>>全新大修改
                     1.添加各主流币种支持
                     2.增加芯片机器的支持
                     3.添加web日志查看功能
                     4.取消激活功能上线为10年激活只为大客户降低算力使用
                     5.UI界面小调整
                     6.内核增加多账户模式抽水改为不长连接
                     7.增加API模式支持第三方接入
                     
2022-03-23 02:10     6.0.1.8.1>>大修改
                     1.增加每个端口单独一个抽水账户
                     2.增加ssl功能
                     3.增加混淆aes加密功能
                     4.UI大修改体验拉满
                     5.增加ETC支持
                     
2022-03-23 23:35     6.0.1.0>>UI界面修改
                     1.首页加入统计算力旷工在线
                     2.抽水界面优化
                     3.抽水算法变为单矿机

2022-02-27 14:46     5.0.1.0>>修改抽水算法
                     1.加入全天平均抽水
                     2.加入全天水机抽水
                     3.抽水模拟矿机是单个矿机
                     
2022-02-20 01:09     4.0.1.0>>正式加入抽水功能
                     1.软件区分企业版后个人版
                     2.自研抽水算法
                          
2022-01-17 19:44     3.0>>正式加入web管理后台
                     1.修改TCP连接监听的BUG
                     2.增加激活功能
                     3.不支持抽水
                          
2022-01-01 22:16     2.0>> 首次发布
                     1.纯转发版本发布
```
