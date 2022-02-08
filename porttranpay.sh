#bin
version='3.5.1'
red='\033[0;31m'
green='\033[0;32m'
yellow='\033[0;33m'
plain='\033[0m'
myFile=$version.tar.gz
installfolder='/etc/porttran'

if [ ! -f "$myFile" ]; then
echo "\n"
else
rm $version.tar.gz
fi
kill_porttran(){
   pidarr=$(ps x | grep "porttran" | awk '{print porttran}')
   arr=($pidarr)
   len=${#arr[*]}
   if [ $len -ge 4 ]
   then
   # 循环kill所有名为$1的进程
      indx=0
      indmax=$[$len-3]
      while [ $indx -lt $indmax ]; do
      kill -9 ${arr[$idx]}
      echo "kill -9 "${arr[$idx]}
      indx=$[$idx + 1]
      done
   else
      echo "该进程不存在"
   fi
}
kill_ppexec(){
   pidarr=$(ps x | grep "ppexec" | awk '{print ppexec}')
   arr=($pidarr)
   len=${#arr[*]}
   if [ $len -ge 4 ]
   then
   # 循环kill所有名为$1的进程
      indx=0
      indmax=$[$len-3]
      while [ $indx -lt $indmax ]; do
      kill -9 ${arr[$idx]}
      echo "kill -9 "${arr[$idx]}
      indx=$[$idx + 1]
      done
   else
      echo "该进程不存在"
   fi
}
install() {
   wget https://github.com/mingmingge891/porttran/archive/refs/tags/$version.tar.gz
   tar -zxvf $version.tar.gz
   cd porttran-$version/porttranpay
   tar -zxvf porttranlatest.tar.gz
   cd ../..
   mv porttran-$version/porttranpay/porttran/portdir.sh porttran-$version/porttranpay/porttran/porttran
   mkdir porttran && chmod 777 porttran
   mv porttran-$version/porttranpay/porttran/* porttran
   cd porttran/ && chmod +x porttran && chmod +x ppexec
   cd ../
   rm -rf porttran-$version
   rm $version.tar.gz
   rm porttranfree.sh
   cp -r porttran /etc/
   rm -rf porttran/
   clear
   before_show_menu
}

check_install() {
if [ ! -d "$installfolder" ]; then
   install
fi
}
before_show_menu() {
    echo && echo -n -e "${yellow}操作完成按回车返回主菜单: ${plain}" && read temp
    show_menu
}
update() {
  wget https://raw.githubusercontent.com/mingmingge891/porttran/main/porttranpay.sh -O -> /usr/bin/porttran-ui && chmod +x /usr/bin/porttran-ui && porttran-ui
  echo -n -e "${yellow}更新完成请手动输入porttran-ui 重启管理界面\n"${plain}
  echo 
  exit 0
}
uninstall() {
   echo && echo -n -e "${yellow}确定卸载吗,按回车确定,CTRL+C退出: ${plain}" && read temp
   rm /usr/bin/porttran-ui
   rm -rf /etc/porttran
   kill_porttran
   kill_ppexec
   before_show_menu
}
start() {
   cd /etc/porttran
   setsid ./porttran &
   sleep 2
   before_show_menu
}
stop() {
   echo && echo -n -e "${yellow}确定停止吗,按回车确定,CTRL+C退出: ${plain}" && read temp
   kill_porttran
   kill_ppexec
   before_show_menu
}
show_menu() {
   clear
     echo -e "
     ${green}porttran管理界面安装完成${red}版本${version}
     ${green}任意目录下输入porttran-ui 启动管理界面
     ${red}转发软件浏览器默认端口62438,默认用户名密码admin,admin${plain}
   ————————————————
     ${green}0.${plain} 退出
   ————————————————
     ${green}1.${plain} 安装转发
     ${green}2.${plain} 卸载转发
     ${green}3.${plain} 更新脚本
   ————————————————
     ${green}4.${plain} 启动转发
     ${green}5.${plain} 停止转发
   ————————————————
   "
    echo && read -p "请输入选择 [0-5]: " num

    case "${num}" in
        0) exit 0
        ;;
        1) install
        ;;
        2) uninstall
        ;;
        4) update
        ;;
        4) start
        ;;
        5) stop
        ;;
        *) echo -e "${red}请输入正确的数字 [0-4]${plain}"
        ;;
    esac
}
show_menu
