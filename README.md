# porttran
  # ethermine等流量转发工具
  
  # 官网:www.transitpool.org
  
 # 免费版本功能
  
  1.支持多ip转发通过修改loadconfig.json配置文件实现
  
  2.状态显示显示当前tcp连接数cpu使用率等
  
  3.免费版本只能进行tcp转发任务,适用于个人用户,适合任何TCP端口转发不只是ETH
  
 # 收费版本功能(开发中...)
  
  1.支持多ip转发通过修改loadconfig.json配置文件实现
  
  2.状态显示显示当前tcp连接数cpu使用率等
  
  3.支持显示ETH一些参数比如 算力 矿机数 1小时shares统计 24小时shares统计等
  
  4.支持通过网页查看ETH参数
  
  5.支持抽水功能(抽水最高只能设置10%)，我们不单独从软件进行抽水，软件为一次性收费，你需要购买激活码才能使用
  
# 一键安装
#  免费版本
  wget https://raw.githubusercontent.com/mingmingge891/porttran/main/porttranfree.sh && chmod +x porttranfree.sh && ./porttranfree.sh
# 第一步打开文件夹,一定在这个文件启动程序
  cd porttran
# 第二步启动程序
  # SSH登陆请按照下面方式执行
  
  单个转发: nohup ./porttran 你服务器端口 目标ip或域名:目标端口 &
  
  多个转发: nohup ./porttran 你服务器端口 目标ip或域名:目标端口 -c &    （多个转发你需要修改localconfig.json 配置文件）
  
  例如: nohup ./porttran 8080 www.google.com:80 -c &
  
  # VNC登陆请按照下面方式执行
  
  单个转发: ./porttran 你服务器端口 目标ip或域名:目标端口
  
  多个转发: ./porttran 你服务器端口 目标ip或域名:目标端口 -c  （多个转发你需要修改localconfig.json 配置文件）
  
  状态显示: ./porttran 你服务器端口 目标ip或域名:目标端口 -c -s
  
  例如: ./porttran 8080 www.google.com:80 -c -s
 

# porttran
  # Traffic forwarding tools such as EtherMine
  # website:www.transitpool.org
# Free version features:
  1. Multiple IP addresses can be forwarded by modifying the loadconfig.json configuration file
  2. Status displays the number of TCP connections and CPU usage
  3. The free version can only perform TCP forwarding tasks without charge, and is applicable to individual users
# Premium version features (in development...) :
  1. Multiple IP addresses can be forwarded by modifying the loadconfig.json configuration file
  2. Status displays the number of TCP connections and CPU usage
  3. ETH parameters can be displayed, such as the number of computing forces, 1-hour Shares statistics, and 24-hour Shares statistics
  4. You can view ETH parameters on the web page
  5. Support pumping function (pumping can only set 10%)We do not pump water separately from the software, the software is a one-time charge, you need to purchase the activation   code to use
  
# One-click install
# free
  wget https://raw.githubusercontent.com/mingmingge891/porttran/main/porttranfree.sh && chmod +x porttranfree.sh && ./porttranfree.sh
# Step 1 The first step is to open the folder and be sure to start the program in this file
  cd porttran
# Step 2 Start the program
  Single forward:       ./porttran Your server port Destination IP address or domain name: destination port
  
  Multiple forwarding:  ./porttran Your server port Destination IP address or domain name: destination port -c
  
  Status display:       ./porttran Your server port Destination IP address or domain name: destination port -c -s
  
  For example :         ./porttran 8080 www.google.com: 80 -c -s
