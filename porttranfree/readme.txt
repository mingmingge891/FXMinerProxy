#################################################
创建多个监听可以使用配置文件
打开localconfig.json修改port_and_address数组
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

##################################################
命令说明 
-s 打开状态显示
-c 加载配置文件比如要启动多个转换是就要加这个命令
-log 日志保存到本地porttran.log 关闭控制输出
-eth 打开eth状态等显示需要配合-s使用

##################################################
web界面说明
web界面默认端口为62000 输入ip:62000访问(请打开62000端口的访问权限) 可以通过修改配置文件改变端口
打开localconfig.json修改web_port参数
