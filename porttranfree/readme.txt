======================================================
   System Required: CentOS 7+ / Debian 8+ / Ubuntu 16+
   Description: Server port transit tool porttran
   Version: v1.0
   Date: 2021-12-20
   Author: hansen
   Web: www.transitpool.org
======================================================
The command
./portdir.sh Destination IP address of the port: port
Step : 1
Configuration files can be used to create multiple listeners
Open the localconfig. Json
nano localconfig.json
{

     "port_and_address": [
      {

          "listen_port": 1992,
          "target_address": "asia1.ethermine.org:14444"

       },
      {
          "listen_port": 1993,
          "target_address": "xxx:xxx"
      },
      {
          "listen_port": 1994,
          "target_address": "xxx:xxx"
      },
    ]
}
In this way, you can create more than one configuration file. To use the configuration file, you need to add the -c command. Otherwise, only the parameters you input from the command line will be executed
Step : 2
The command that
-s Displays the status, such as the number of TCP connections
-c Load configuration files. For example, if you want to start multiple conversions, add this command

命令
./portdir.sh 端口 目标地址:端口 

Step : 1
创建多个监听可以使用配置文件
打开localconfig.json  
nano localconfig.json
{
    "port_and_address": [
        {
            "listen_port": 1992,
            "target_address": "asia1.ethermine.org:14444"
        },
       {
            "listen_port": 1993,
            "target_address": "xxx:xxx"
        },
       {
            "listen_port": 1994,
            "target_address": "xxx:xxx"
        },
    ]
}
这样就可以创建多个，使用配置文件需要加入-c命令否者只会执行你命令行输入的参数
Step : 2
命令说明 
-s 打开状态显示如TCP的连接数等
-c 加载配置文件比如要启动多个转换是就要加这个命令
-log 日志保存到本地porttran.log 关闭控制输出
-eth 打开eth状态等显示

web界面

web界面默认端口为62000 输入ip:62000访问(请打开62000端口的访问权限) 可以通过修改配置文件改变端口
